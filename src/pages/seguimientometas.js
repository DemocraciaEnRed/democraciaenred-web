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

const SeguimientoMetas = () => {
  const title = "Seguimiento de metas";
  const description = "Una herramienta para transparentar los compromisos del gobierno y su seguimiento.";
  const robot = "noindex"
  return (
    <React.Fragment>
      <Layout>
        <SEO title={title} description={description} robot={robot} />
        <ProductHeader data={productsData[2]} />
        <FeaturesSection data={FeaturesData[2]} />

        {productsSpecsData[2].map((product, index) => (
          <ProductSpecs data={product} key={index} />
        ))}
        <hr />
        <InstalationsSection data={instalationsData} />
      </Layout>
    </React.Fragment>
  );
};

export default SeguimientoMetas;
