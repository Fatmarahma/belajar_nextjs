import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atoms/Buttons";
import Link from "next/link";

const Login = () => {
  return (
    <form className="flex flex-col gap-4">
      <InputForm label="username" name="email" placeholder="Masukan email" />
      <InputForm label="password" name="password" placeholder="Masukan password" />
      <Button size={"w-full"}>Login</Button>
      <p className="text-sm text-center mt-2">
        Don&apos;t have an account?
        <Link href="/register" className="text-blue-500 hover:text-blue-700">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
