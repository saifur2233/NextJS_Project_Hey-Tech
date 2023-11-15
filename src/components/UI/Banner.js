const Banner = () => {
  return (
    <div className="hero py-10">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <img
          src="https://i.ibb.co/59qfG8f/faq-illustration.png"
          className="max-w-lg hover:max-w-2xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
