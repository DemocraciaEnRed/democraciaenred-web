import React from "react";
import Navbar from "../navbar"
import SEO from "../seo"
import Footer from "../footer"
import GoTop from "../go-top";

const Layout = ({ children }) => {


  return (
    <>
      <SEO />
      <Navbar />
      {children}
      <GoTop/>
      <Footer />
    </>
  );
};

export default Layout;
