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

import SEO from "../components/seo";

//Sets smooth scroll animation for anchor links
if (typeof window !== "undefined") {
  const SmoothScroll = require("smooth-scroll");
  new SmoothScroll('a[href*="#"]');
}

const ConsultaDigital = () => {
  const title = "Consulta Digital";
  const description = "Una herramienta para que los usuarios comenten, voten y jerarquicen opiniones en temas públicos.";
  return (
    <React.Fragment>
      <Layout>
        <SEO title={title} description={description} />

        <ProductHeader data={productsData[1]} />
        <FeaturesSection data={FeaturesData[1]} />

        {productsSpecsData[1].map((product, index) => (
          <ProductSpecs data={product} key={index} />
        ))}
        <hr />
        <InstalationsSection data={instalationsData} />
      </Layout>
    </React.Fragment>
  );
};

export default ConsultaDigital;
