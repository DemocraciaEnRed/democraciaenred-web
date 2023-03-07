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

const PresupuestoParticipativo = () => {
  const title = "Presupuesto Participativo";
  const description = "Descubrí cómo implementar la herramienta de participación con más aplicaciones en LATAM.";
  const robot = "noindex"
  return (
    <React.Fragment>
      <Layout>
        <SEO title={title} description={description} robot={robot} />

        <ProductHeader data={productsData[0]} />
        <FeaturesSection data={FeaturesData[0]} />

        {productsSpecsData[0].map((product, index) => (
          <ProductSpecs data={product} key={index} />
        ))}
        <hr />
        <InstalationsSection data={instalationsData} />
      </Layout>
    </React.Fragment>
  );
};

export default PresupuestoParticipativo;
