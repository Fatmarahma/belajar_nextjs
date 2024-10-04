import Button from "@/components/atoms/Buttons";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import { data } from "@/constant/data";
import BackToTop from "@/components/atoms/Icons/BackToTop";
import { getProducts } from "@/services/products";
import { getUsername } from "@/services/auth";

function ProductsPage() {
  const footerRef = useRef();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [username, setUsername] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]); //<-- state untuk menyimpan data dari API

  // useEffect untuk manggil fungsi service getProducts
  useEffect(() => {
    async function fetchProducts() {
      try {
        const dataProduct = await getProducts();
        setProducts(dataProduct.slice(0, 8));
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  const searchProduct = useMemo(() => {
    return products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  //useEffect untuk data dari localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  //untuk menghapus data dari localstorage
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };
  //menambahkan product ke cart
  //eventHandler diganti ke useCallback
  /**useCallback : hooks yang dipakai untuk menyimpan fungsi di cache agar fungsi hanya dijalankan
   * ketika ada perubahan  pada nilai fungsi tersebut
   */
  const handleAddToCart = useCallback(
    (id) => {
      const itemInCart = cart.find((item) => item.id === id);

      if (itemInCart) {
        // Update quantity if item already exists in cart
        setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
      } else {
        // Add new item to cart with qty set to 1
        const newItem = { id, qty: 1 }; // Assuming you want to add just the id and qty
        setCart([...cart, newItem]);
      }
    },
    [cart]
  );

  //useMemo untuk menghitung total harga cart dan menyimpan hasil perhitungan ke cache
  /** useMemo : hooks untuk menyipan hasil komputasi (perhitungan matematika) di cache
   * agar tidak perlu dijalankan/dihitung ulang ketika ada perubahan.
   * dalam kasus ini useMemo untuk menyimpan hasil total cart di cache sehingga halaman di refres
   *
   * product?.price <- optimal chaining= sebuah penjagaan untuk memastikan nilai/propertynya ada atau tidak
   */

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const product = products.find((product) => product.id === item.id);
      return total + product?.price * item.qty;
    }, 0);
  }, [cart, products]); // <--- data yang lagi dipantau perubahannya

  //untuk menghitung total harga dan menyimpan data cart ke localstorage.
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  //usseEffect untuk menghandle button backtotop
  useEffect(() => {
    function handleScroll() {
      const footerTop = footerRef.current.offsetTop;

      const viewportHeight = window.innerHeight;

      const scrollPosition = window.scrollY;
      // cek apakah posisi scroll dilayar sudah mencapai elemen footer
      if (scrollPosition + viewportHeight >= footerTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }
    //event listener untuk ngecek scroll
    window.addEventListener("scroll", handleScroll);

    //kembalikan fungsi yang akan dijalankan saat layar berhenti  di scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); //hapus event listener pada event scroll ketika scroll berhenti
    };
  }, [footerRef]); //<- akan dipantau setiap kali ada perubahan.

  const handleBackToTop = () => {
    //window.scrollTo L untuk menscrik layar keatas dengan animasi yang smooth
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 px-5 py-4">
        <h1 className="text-xl">Welcome, {username}</h1>
        <div className="w-[300px]">
          <input
            type="text"
            placeholder="search..."
            className="py-2 px-4 rounded-full w-[300px]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value !== "") {
                setShowSearch(true);
              } else {
                setShowSearch(false);
              }
            }}
          />
          {showSearch && searchProduct.length > 0 && (
            <ul className="absolute bg-white text-black w-[300px] mt-1 py-2 px-3 rounded-lg">
              {searchProduct.map((product) => (
                <li key={product.id} className="my-1">
                  {product.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button color="bg-red-500" textButton="Logout" onClick={handleLogout} />
      </div>
      <div className="flex px-5 py-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2 uppercase">Products</h1>
          {/* products */}
          <div className="flex flex-wrap gap-4">
            {products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
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
          <div className="cart min-w-[400px] max-w-[400px]">
            <h1 className="text-3xl font-bold mb-2 uppercase">Cart</h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                const datas = products.find((data) => data.id === item.id);
                return (
                  <>
                    <div key={item.id} className="flex p-4 border rounded-lg">
                      <Image
                        src={datas?.image}
                        width={100}
                        height={100}
                        alt="cart item"
                        className="aspect-square object-contain"
                      />
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between ml-3">
                          <span className="font-bold text-xl line-clamp-2">{datas?.title}</span>
                          <span className="font-semibold">
                            {(datas?.price * item.qty).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
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
                {cartTotal.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
              </span>
            </div>
          </div>
        )}
      </div>
      {showBackToTop && (
        <div onClick={handleBackToTop} className="fixed right-5 bottom-20 bg-blue-600 p-2 rounded-full">
          <BackToTop />
        </div>
      )}

      <footer ref={footerRef} className="text-center p-5 bg-gray-800 text-white w-full">
        copyright by fatma
      </footer>
    </>
  );
}

export default ProductsPage;
