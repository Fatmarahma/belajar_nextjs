import { useState } from "react";
import Button from "@/components/atoms/Buttons";
import Login from "@/components/organism/Login";
import AuthLayout from "@/components/templates/AuthLayout/Index";
import React from "react";

const LoginPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleChange() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <div
        className={`flex justify-center items-center min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <AuthLayout title="Login" desc="Hi, please login to your account" type="login">
          <Login />
        </AuthLayout>
      </div>
      <div className="flex justify-center items-center">
        <button className={`p-4 ${isDarkMode ? "bg-gray-700" : "bg-black"} text-white`} onClick={handleChange}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
};

export default LoginPage;
