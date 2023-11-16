import Footer from "@/components/Layouts/Footer";
import NavBar from "@/components/Layouts/NavBar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <NavBar></NavBar>
        <div className="px-12">
          <Component {...pageProps} />
        </div>
        <Footer></Footer>
      </>
    </SessionProvider>
  );
}
