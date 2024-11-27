import React from "react";
import SignUpForm from "../components/SignUpForm.jsx"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/posts");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignUpForm onSuccess={handleSuccess} />
    </div>
  );
};

export default Signup;
