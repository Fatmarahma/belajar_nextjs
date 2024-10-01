import Button from "@/components/atoms/Buttons";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useState, useEffect } from "react";
const data = [
  {
    id: 1,
    image: "images/odeng.jpg",
    name: "Odeng1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime consequuntur aperiam at harum quasi rem temporibus pariatur, enim aut",
    price: 25000,
  },
  {
    id: 2,
    image: "images/odeng.jpg",
    name: "Odeng2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime consequuntur aperiam at harum quasi rem temporibus pariatur, enim aut",
    price: 25000,
  },
  {
    id: 3,
    image: "images/odeng.jpg",
    name: "Odeng3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime consequuntur aperiam at harum quasi rem temporibus pariatur, enim aut",
    price: 25000,
  },
];

function ProductsPage() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 px-5 py-4">
        <h1 className="text-xl">Welcome,{username}</h1>
        <Button color="bg-red-500" textButton="Logout" onClick={handleLogout} />
      </div>

      <div className="flex justify-center items-center min-h-screen gap-4">
        {/*Baris awal cara menggunakan nested component*/}
        <CardProduct>
          <CardProduct.Header image={"images/odeng.jpg"} />
          <CardProduct.Body
            title={"Title Product"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime consequuntur aperiam at harum quasi rem temporibus pariatur, enim aut."
            }
          />
          <CardProduct.Footer price={"25.000"} />
        </CardProduct>
        {/*Baris akhir cara menggunakan nested component*/}
        {/*cara memanggl nested componenmenggunakan REDERING LISR
      Redering List : teknik untuk menampilkan beberapa elemen bedasarkan data dinamis yang disimpan dalam array of object */}
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body title={item.name} desc={item.desc} />
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
