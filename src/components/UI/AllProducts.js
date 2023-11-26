import {
  useGetCategoryProductsQuery,
  useGetProductsQuery,
} from "@/redux/api/apiSlice";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const AllProducts = () => {
  //console.log("allProducts page", allProducts);
  //const { data, isLoading, error } = useGetProductsQuery(undefined);
  const { data, isLoading, error } = useGetCategoryProductsQuery("Monitor");
  console.log("Loading: ", isLoading);
  console.log("Error: ", error);
  const dispatch = useDispatch();
  const handleAddProduct = (product) => {
    //console.log("Product: ", product);
    dispatch(addToCart(product));
    toast.success("Product Added");
  };
  return (
    <div>
      <div className="text-center py-12">
        <h1 className="font-bold text-3xl">Featured Category</h1>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 w-[80%] mx-auto">
          {data?.slice(0, 6).map((product) => (
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
                    TK: {product?.price}
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
                <button
                  onClick={() => handleAddProduct(product)}
                  className="btn btn-secondary"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
