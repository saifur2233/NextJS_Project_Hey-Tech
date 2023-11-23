import Footer from "@/components/Layouts/Footer";
import NavBar from "@/components/Layouts/NavBar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <>
          <NavBar></NavBar>
          <div className="px-12">
            <Component {...pageProps} />
          </div>
          <Footer></Footer>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 5000,

              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </>
      </SessionProvider>
    </Provider>
  );
}
