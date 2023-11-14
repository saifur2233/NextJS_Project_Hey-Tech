import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = () => {
  return <div> HomePage</div>;
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
