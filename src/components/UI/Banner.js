const Banner = () => {
  return (
    <div className="hero py-12">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <img
          src="https://i.ibb.co/ThfTZj7/Star-Tech-Laptop-Desktop-Deal-Home-Banner-982x500.png"
          className="sm:max-w-sm md:max-w-md lg:max-w-2xl hover:max-w-5xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-blue-700">
            Best Laptop Shop in Bangladesh
          </h1>
          <p className="py-6">
            Technology has become a part of our daily lives, and we depend on
            tech products daily for a vast portion of our lives. There is hardly
            a home in Bangladesh without a tech product. This is where we come
            in. Hey-Tech Ltd. started as a Tech Product Shop in March 2007. We
            focus on giving the best customer service in Bangladesh, following
            our motto of “Customer Comes First.”
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
