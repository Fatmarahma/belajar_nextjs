import Button from "@/components/atoms/Buttons";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { data } from "@/constant/data";

function ProductsPage() {
  const [username, setUsername] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);

    if (itemInCart) {
      // Update quantity if item already exists in cart
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      // Add new item to cart with qty set to 1
      const newItem = { id, qty: 1 }; // Assuming you want to add just the id and qty
      setCart([...cart, newItem]);
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((total, item) => {
        const product = data.find((product) => product.id === item.id);
        return total + product.price * item.qty;
      }, 0);
      setTotal(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 px-5 py-4">
        <h1 className="text-xl">Welcome, {username}</h1>
        <Button color="bg-red-500" textButton="Logout" onClick={handleLogout} />
      </div>
      <div className="flex px-5 py-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2 uppercase">Products</h1>
          {/* products */}
          <div className="flex flex-wrap gap-4">
            {data.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.name} desc={item.desc} />
                <CardProduct.Footer
                  price={item.price}
                  onClick={() => {
                    handleAddToCart(item.id);
                  }}
                />
              </CardProduct>
            ))}
          </div>
        </div>
        {/* cart */}
        {cart.length > 0 && (
          <div className="cart w-1/3">
            <h1 className="text-3xl font-bold mb-2 uppercase">Cart</h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                const datas = data.find((data) => data.id === item.id);
                return (
                  <>
                    <div key={item.id} className="flex p-4 border rounded-lg">
                      <Image src={datas.image} width={500} height={500} alt="cart item" className="max-w-[100px]" />
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between ml-3">
                          <span className="font-bold text-xl">{datas.name}</span>
                          <span className="font-semibold">
                            {(datas.price * item.qty).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <span className="mb-1">Qty</span>
                          <span className="flex justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                            {item.qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex justify-between px-4 py-2 border mt-2">
              <span className="font-semibold">total</span>
              <span className="font-semibold">
                {total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductsPage;
