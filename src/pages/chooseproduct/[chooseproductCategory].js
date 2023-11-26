const ChooseProductCategoryPage = ({ products }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div class="grid grid-rows-6 grid-flow-col gap-6 py-12">
        <div class="row-span-6 ...">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Price Range</h2>
              <div className="divider"></div>

              <div className="card-actions justify-center gap-6">
                <input
                  type="range"
                  min={0}
                  max="100"
                  className="range range-info"
                />
                <div className="flex justify-between  gap-6">
                  <input
                    type="text"
                    defaultValue="0"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    defaultValue="100"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {products.map((product) => (
          <div key={product.pid} class=" col-span-2 ...">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img src={product.image} alt="Album" className="w-1/3" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <p>{product.category}</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-wide btn-xs sm:btn-sm md:btn-md btn-secondary">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseProductCategoryPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://hey-tech-server.vercel.app/category?category=${params.chooseproductCategory}`
  );
  const data = await res.json();
  console.log("Category ", data);

  return {
    props: {
      products: data,
    },
  };
};
