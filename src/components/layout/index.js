import React from "react";
import Navbar from "../navbar"
import SEO from "../seo"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
