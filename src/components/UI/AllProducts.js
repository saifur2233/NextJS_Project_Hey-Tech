const AllProducts = ({ allProducts }) => {
  //console.log("allProducts page", allProducts);
  return (
    <div>
      <div className="text-center py-12">
        <h1 className="font-bold text-3xl">Featured Category</h1>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="py-12 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.slice(0, 6).map((product) => (
            <div key={product.pid} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={product?.image} alt="product image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product?.productName}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{product?.category}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
