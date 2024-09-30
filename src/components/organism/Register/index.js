import Button from "@/components/atoms/Buttons";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <form className="flex flex-col gap-4">
      <InputForm label="Name" name="name" placeholder="Masukan nama" />
      <InputForm label="email" name="email" placeholder="Masukan email" />
      <InputForm label="password" name="password" placeholder="Masukan password" />
      <Button size={"w-full"}>Login</Button>
    </form>
  );
};

export default Register;
