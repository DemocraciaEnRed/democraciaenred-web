import React from "react";
import "./styles.scss";

import ProductHeader from "../components/products-header";
import productsData from "../../content/header.json";

import FeaturesSection from "../components/features-section";
import FeaturesData from "../../content/features_section.json";

import ProductSpecs from "../components/product-specs";
import productsSpecsData from "../../content/products-specs.json";

import InstalationsSection from "../components/instalations-section";
import instalationsData from "../../content/instalations.json";
import Layout from "../components/layout";

//Sets smooth scroll animation for anchor links
if (typeof window !== "undefined") {
  const SmoothScroll = require("smooth-scroll");
  new SmoothScroll('a[href*="#"]');
}

const ConsultaDigital = () => {
  return (
    <React.Fragment>
      <Layout>
        <ProductHeader data={productsData[1]} />
        <FeaturesSection data={FeaturesData[1]} />

        {productsSpecsData[1].map((product) => (
          <ProductSpecs data={product} key={product.id} />
        ))}
        <hr />
        <InstalationsSection data={instalationsData} />
      </Layout>
    </React.Fragment>
  );
};

export default ConsultaDigital;
