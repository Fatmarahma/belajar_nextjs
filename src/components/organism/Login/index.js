import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atoms/Buttons";
import Link from "next/link";
import { login } from "@/services/auth";

const Login = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    //
    const payload = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    //
    try {
      const response = await login(payload);
      console.log(response);
      //cek token
      if (response.status) {
        localStorage.setItem("token", response.token);
        window.location.href = "/products";
      } else {
        console.log("Login failed", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <InputForm label="username" name="username" type="text" placeholder="Masukan nama" />
      <InputForm label="password" name="password" type="password" placeholder="Masukan password" />
      <Button
        //  onClick={handleLogin}
        color="bg-blue-500 hover:bg-blue-700"
        size={"w-full"}
        textButton="Submit"
        type={"submit"}
      />
    </form>
  );
};

export default Login;
