import React from "react";
import Navbar from "../navbar"
import SEO from "../seo"
import Footer from "../footer"
import GoTop from "../go-top";
import "./styles.scss";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Navbar />
      <main className="layout-content">
        {children}
      </main>
      <GoTop/>
      <Footer />
    </>
  );
};

export default Layout;
