import Link from "next/link";

const AllProducts = ({ allProducts }) => {
  //console.log("allProducts page", allProducts);
  return (
    <div>
      <div className="text-center py-12">
        <h1 className="font-bold text-3xl">Featured Category</h1>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 w-[80%] mx-auto">
          {allProducts.slice(0, 6).map((product) => (
            <div key={product.pid} className="card w-96 bg-base-100 shadow-xl">
              <Link href={`/products/${product?._id}`}>
                <figure>
                  <img src={product?.image} alt="product image" />
                </figure>
              </Link>
              <div className="card-body">
                <h2 className="card-title">
                  {product?.productName}
                  <div className="badge badge-secondary">
                    Price: {product?.price}
                  </div>
                </h2>
                <div className="justify-end">
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
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
