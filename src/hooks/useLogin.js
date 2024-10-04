import React, { useState, useEffect } from "react";
import { getUsername } from "@/services/auth";

const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []); // Menambahkan array dependency agar effect hanya berjalan sekali

  //   const getUsername = (token) => {
  //     // Logika untuk mengekstrak username dari token
  //     // Misalnya, jika token adalah JWT, Anda bisa mendekode payloadnya
  //     const payload = JSON.parse(atob(token.split('.')[1]));
  //     return payload.username; // Asumsikan payload memiliki properti username
  //   };

  return username;
};

export default useLogin;
