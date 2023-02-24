import React from "react";
import "./styles.scss";
import InternalPageHero from "../components/internal-page-hero";
import dataResources from "../../content/resources.json";
import Division from "../components/division";
import ResourcesHeader from "../components/resources-header";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Recursos = () => {
  const title = "Recursos"
  const description = "Conocé como participar de la toma de decisiones públicas."
  return (
    <React.Fragment>
      <Layout>
        <SEO title={title} description={description} />
        <InternalPageHero data={dataResources} background= {"lila"} />
        <Division />
        <ResourcesHeader data={dataResources} />
      </Layout>
    </React.Fragment>
  );
};

export default Recursos;
