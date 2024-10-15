import { getProductById } from "@/services/products";
import React from "react";

const ProductDetailPage = ({ productDetail }) => {
  console.log(productDetail);

  return (
    <div className="border border-black p-6 max-w-xl">
      {productDetail.title}
      <span className="font-bold text-xl line-clamp-2">{productDetail.description}</span>
      <span className="font-semibold">{productDetail.price}</span>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params);
  const id = params.slug;

  try {
    const [productDetail] = await Promise.all([getProductById(id)]);
    return {
      props: {
        productDetail,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default ProductDetailPage;
