import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const ProductDetailPage = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <img
            src="https://i.ibb.co/59qfG8f/faq-illustration.png"
            className="max-w-2xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">Box Office News!</h1>
            <p className="pt-6">Provident cupiditate voluptatem</p>
            <p className="pt-6">Provident cupiditate voluptatem</p>
            <p className="pt-6">Provident cupiditate voluptatem</p>
            <p className="pt-6">Provident cupiditate voluptatem</p>
            <p className="pt-6">Provident cupiditate voluptatem</p>
            <p className="py-6">Provident cupiditate voluptatem</p>
            <button className="btn btn-secondary">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
