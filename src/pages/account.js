import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const AccountPage = () => {
  return (
    <div className="hero min-h-screen">
      <h1 className="text-6xl">Account Page</h1>
    </div>
  );
};
export default AccountPage;
AccountPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
