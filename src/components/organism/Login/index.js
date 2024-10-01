import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atoms/Buttons";
import Link from "next/link";

const Login = () => {
  // buat fungsi handle login
  const handleLogin = (event) => {
    //event.preventDefault berfungsi untuk mencegah halaman agar tidak refres /reload saat fungsi di trigger
    event.preventDefault();
    console.log("Login");
    // event.target.username.value :  untuk mengambil data dalam inputan form dan ngehasilin ke log
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    // localstorage.setItem: untuk menyimpan data dari inputan form ke dalam penyimpanan lokal milik browser
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    // window.location.href = berfungsi untuk mwngarahkan ke halaman lain
    window.location.href = "/products";
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
