import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import Banner from "@/components/UI/Banner";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Hey-Tech | IT Professionals trusted source</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllProducts />
    </>
  );
};

export default HomePage;

// export const getStaticProps = async () => {
//   const res = await fetch("https://hey-tech-server.vercel.app/product");
//   const data = await res.json();
//   //console.log(data.data);
//   return {
//     props: {
//       allProducts: data.data,
//     },
//     revalidate: 10,
//   };
// };
