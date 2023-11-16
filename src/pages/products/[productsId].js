import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const ProductDetailPage = ({ product }) => {
  return (
    <>
      <div className="hero py-12">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <img
            src={product?.image}
            className="max-w-2xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">{product?.productName}</h1>
            <div className="gap-2 py-4">
              <div className="badge badge-outline">{product?.category}</div>
              <div className="badge badge-outline gap-1">
                {product?.averageRating}
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-red-500"
                  />
                </div>
              </div>
              <div className="badge badge-outline">{product?.status}</div>
            </div>
            <button className="btn btn-outline btn-secondary btn-wide btn-sm">
              Price: {product?.price}
            </button>
            <p className="pt-6 font-bold">Key Features</p>
            <ul className="space-y-1 text-md list-disc">
              <li>{product?.keyFeatures?.model}</li>
              <li>{product?.keyFeatures?.specification}</li>
            </ul>
            <p className="pt-6">{product?.description}</p>

            <button className="btn btn-accent">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="p-10 w-[60%] mx-auto">fsfsf</div>
    </>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://hey-tech-server.vercel.app/product/${params.productsId}`
  );
  const data = await res.json();
  console.log("New Detail ", data);

  return {
    props: {
      product: data,
    },
  };
};
