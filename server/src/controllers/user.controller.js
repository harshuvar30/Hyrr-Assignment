import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import mongoose from "mongoose";

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - field should not be empty
    // check if user already exists: username or email
    // check for images , check for avatar
    // upload them to cloudinary avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response
    console.log(req.body);
  
    const { name, email, username, password } = req.body;
    console.log("email: ", email);
    // if(name === ""){
    //     throw new ApiError(400,"name is required")
    // }
    if (
      [email, username, password].some((field) => {
        field?.trim() === "";
      })
    ) {
      throw new ApiError(400, "all fields are requied");
    }
    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existedUser) {
      throw new ApiError(409, "user with this email or username already exist");
    }
    console.log(req.file);
    // const avatarLocalPath = req.files?.avatar[0]?.path;
    const avatarLocalPath = req.file?.path;
    // if (!avatarLocalPath) throw new ApiError(400, "Avatar file is missing");
    let avatar;
    if(avatarLocalPath){
      avatar = await uploadOnCloudinary(avatarLocalPath);
      if (!avatar.url) {
        throw new ApiError(400, "Error while uploading avatar");
      }
    }
    
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;
    
    // if (!avatar) throw new ApiError(400, "Avatar files is required");
  
    const user = await User.create({
      name,
      avatar: avatar?.url || "",
      email,
      password,
      username: username.toLowerCase(),
    });
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    if (!createdUser)
      throw new ApiError(500, "Something went wrong while registring the user");
  
    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User register successfully"));
  });


  const loginUser = asyncHandler(async (req, res) => {
    // validate user if registered
  
    const { username, email, password } = req.body;
    if (!username && !email)
      throw new ApiError(400, "username or email is required");
    if (!password) throw new ApiError(400, "password is required");
  
    const user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
  
    if (!user)
      throw new ApiError(404, "No user found with given username or email");
  
    const isValidPassword = await user.isPasswordCorrect(password);
    if (!isValidPassword) throw new ApiError(401, "Wrong  password!");
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );
  
    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
  
    const options = {
      httpOnly: true,
      secure: true,
    };
  
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          "User logged in successfully"
        )
      );
  });

  const logoutUser = asyncHandler(async (req, res) => {
    // remove cookies
    // res.clearCookie("accessToken");
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: { refreshToken: 1 },
      },
      { new: true }
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged out"));
  });


  const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken =
      req.cookies.refreshToken || req.body.refreshToken;
  
    if (!incomingRefreshToken) {
      throw new ApiError(401, "Unathorized request");
    }
    try {
      const decoded = jwt.verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
      const user = await User.findById(decoded?._id);
      if (!user) {
        throw new ApiError(401, "Invalid refresh token");
      }
      if (incomingRefreshToken !== user?.refreshToken) {
        throw new ApiError(401, "Refresh token is expired or used");
      }
      const options = {
        httpOnly: true,
        secure: true,
      };
      const { accessToken, newRefreshToken } =
        await generateAccessAndRefreshToken(user._id);
      // console.log("we got access token :",accessToken)
      // console.log("we got access refresh token :",newRefreshToken)
  
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
          new ApiResponse(
            200,
            { accessToken, refreshToken: newRefreshToken },
            "Access token refreshed successfully"
          )
        );
    } catch (error) {
      throw new ApiError(401, error?.message || "Invalid refresh token!!");
    }
  });

  const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user?._id);
  
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
  
    if (!isPasswordCorrect) {
      throw new ApiError(400, "Wrong old password");
    }
  
    user.password = newPassword;
  
    await user.save({ validateBeforeSave: false });
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Password Changed Successfully!"));
  });
  

  const getCurrentUser = asyncHandler(async (req, res) => {
    return res
      .status(200)
      .json(new ApiResponse(200, req.user, "Current user fetched successfully "));
  });

  const updateAccount = asyncHandler(async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new ApiError(400, "All Fields are required");
    }
  
    const user = await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          name: name,
          email: email,
        },
      },
      { new: true }
    ).select("-password ");
  
    return res
      .status(200)
      .json(new ApiResponse(200, user, "Account details updated Succesfully"));
  });
  

  const updateUserAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;
    if (!avatarLocalPath) throw new ApiError(400, "Avatar file is missing");
  
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar.url) {
      throw new ApiError(400, "Error while uploading avatar");
    }
    const user = User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          avatar: avatar.url,
        },
      },
      { new: true }
    ).select("-password");
    return res
      .status(200)
      .json(new ApiResponse(200, user, "Avatar image uploaded successfully"));
  });
  
  export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccount,
    updateUserAvatar
  };
  
  
  
  