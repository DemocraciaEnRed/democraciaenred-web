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

const CoConstruccionLeyes = () => {
  return (
    <React.Fragment>
      <Layout>
        <ProductHeader data={productsData[3]} />
        <FeaturesSection data={FeaturesData[3]} />

        {productsSpecsData[3].map((product, index) => (
          <ProductSpecs data={product} key={index} />
        ))}

        <InstalationsSection data={instalationsData} />
      </Layout>
    </React.Fragment>
  );
};

export default CoConstruccionLeyes;
