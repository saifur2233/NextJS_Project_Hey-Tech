import RootLayout from "@/components/Layouts/RootLayout";

const NotFoundPage = () => {
  return (
    <div className="hero min-h-screen">
      <h1 className="text-6xl">404!!! Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
NotFoundPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
