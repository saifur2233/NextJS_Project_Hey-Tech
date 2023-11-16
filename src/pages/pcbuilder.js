import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const PCBuilderPage = () => {
  return (
    <div className="hero py-6">
      <div className="w-full lg:p-10 lg:w-[60%] mx-auto">
        <div className="box-border p-4 border-4 hover:box-content">
          <div className="flex justify-between border-b-4 py-2">
            <div className="pt-2">
              <h3 className="font-bold text-xl">Hey-Tech</h3>
            </div>
            <div>
              <button className="btn btn-outline btn-secondary">
                Get a Quote
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="pt-2">
              <h3 className="font-bold text-md">
                PC Builder - Build Your Own Computer
              </h3>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text">
                    Hide Unconfigured Components
                  </span>
                </label>
              </div>
            </div>
            <div className="pt-2">
              <button className="btn btn-outline btn-error">
                <p>0W</p> <p>Estimated Wattage</p>
              </button>
              <button className="btn btn-info">0TK 0 Items</button>
            </div>
          </div>
          <div className="bg-blue-700 my-3">
            <p className="text-sm text-white ps-4">Core Component</p>
          </div>
          {/* <div><img src="https://i.ibb.co/wsXYJzQ/cpu.png" alt="cpu" border="0"></div> */}
          <div>
            <div className="card bg-secondary-content my-2">
              <div className="flex justify-between p-5">
                <div className="flex gap-4">
                  <figure>
                    <img src="https://i.ibb.co/wsXYJzQ/cpu.png" alt="Shoes" />
                  </figure>

                  <h2 className="card-title">
                    CPU
                    <div className="badge badge-secondary">Required</div>
                  </h2>
                </div>

                <div className="">
                  <button className="btn btn-primary btn-outline">
                    Choose
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-secondary-content my-2">
              <div className="flex justify-between p-5">
                <div className="flex gap-4">
                  <figure>
                    <img
                      src="https://i.ibb.co/PwLsB4d/motherboard.png"
                      alt="Shoes"
                    />
                  </figure>
                  <h2 className="card-title">
                    CPU
                    <div className="badge badge-secondary">Required</div>
                  </h2>
                </div>

                <div className="">
                  <button className="btn btn-primary btn-outline">
                    Choose
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-secondary-content my-2">
              <div className="flex justify-between p-5">
                <div className="flex gap-4">
                  <figure>
                    <img src="https://i.ibb.co/NYKmyB4/ram.png" alt="Shoes" />
                  </figure>
                  <h2 className="card-title">
                    RAM
                    <div className="badge badge-secondary">Required</div>
                  </h2>
                </div>

                <div className="">
                  <button className="btn btn-primary btn-outline">
                    Choose
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-secondary-content my-2">
              <div className="flex justify-between p-5">
                <div className="flex gap-4">
                  <figure>
                    <img src="https://i.ibb.co/pw4vpk8/power.png" alt="Shoes" />
                  </figure>
                  <h2 className="card-title">
                    Power Supply Unit
                    <div className="badge badge-secondary">Required</div>
                  </h2>
                </div>

                <div className="">
                  <button className="btn btn-primary btn-outline">
                    Choose
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-secondary-content my-2">
              <div className="flex justify-between p-5">
                <div className="flex gap-4">
                  <figure>
                    <img
                      src="https://i.ibb.co/d0x59f4/hard-drive.png"
                      alt="Shoes"
                    />
                  </figure>
                  <h2 className="card-title">
                    Storage Device
                    <div className="badge badge-secondary">Required</div>
                  </h2>
                </div>

                <div className="">
                  <button className="btn btn-primary btn-outline">
                    Choose
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-secondary-content my-2">
              <div className="flex justify-between p-5">
                <div className="flex gap-4">
                  <figure>
                    <img
                      src="https://i.ibb.co/9YC67PK/monitor.png"
                      alt="Shoes"
                    />
                  </figure>
                  <h2 className="card-title">
                    Monitor
                    <div className="badge badge-secondary">Required</div>
                  </h2>
                </div>

                <div className="">
                  <button className="btn btn-primary btn-outline">
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCBuilderPage;
PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
