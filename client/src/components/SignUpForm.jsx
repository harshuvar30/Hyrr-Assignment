import React from "react";
import { useForm } from "react-hook-form";
import { signupSchema } from "../utils/zodSchemas";
import { registerUser } from "../services/api";
import InputField from "./InputField.jsx";
import {zodResolver} from '@hookform/resolvers/zod'

 const SignUpForm = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      alert("Welcome! Your account has been created.");
      onSuccess();
    } catch (error) {
      alert("Error creating account. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <InputField
        label="Username"
        id="username"
        type="text"
        register={register("username")}
        error={errors.username}
      />

      <InputField
        label="Email"
        id="email"
        type="email"
        register={register("email")}
        error={errors.email}
      />

      <InputField
        label="Name (Optional)"
        id="name"
        type="text"
        register={register("name")}
      />

      <InputField
        label="Password"
        id="password"
        type="password"
        register={register("password")}
        error={errors.password}
      />

      <InputField
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Profile Picture (Optional)
        </label>
        <input
          {...register("profilePicture")}
          type="file"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            {...register("terms")}
            type="checkbox"
            className="mr-2 leading-tight"
          />
          I accept the terms and conditions
        </label>
        {errors.terms && (
          <p className="text-red-500 text-xs italic">{errors.terms.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm
