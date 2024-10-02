import Button from "@/components/atoms/Buttons";
import React from "react";
import Image from "next/image";

function CardProduct({ children }) {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to bg-sky-600 p-1 shadow-xl">
        <div className="w-full max-w-xs bg-white rounded-lg">{children}</div>
      </div>
    </>
  );
}

export default CardProduct;

function Header({ image }) {
  return <Image width={500} height={500} src={image} alt={image} className="rounded-t-lg" />;
}

function Body({ title, desc }) {
  return (
    <div className="px-5 pb-5">
      <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-700 text-base text-justify">{desc}</p>
    </div>
  );
}

function Footer({ price, onClick }) {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-5">
      <span className="text-2xl font-semibold mb-2">Harga : Rp.{price}</span>
      <Button size={"w-full"} color="bg-blue-500" textButton="Buy" onClick={onClick} />
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
