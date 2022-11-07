import React from "react";
import "./styles.scss";
import InternalPageHero from "../components/internal-page-hero";
import dataResources from "../../content/resources.json";
import Division from "../components/division";
import ResourcesHeader from "../components/resources-header";
import Layout from "../components/layout";

const Recursos = () => {
  return (
    <React.Fragment>
      <Layout>
        <InternalPageHero data={dataResources} background= {"lila"} />
        <Division />
        <ResourcesHeader data={dataResources} />
      </Layout>
    </React.Fragment>
  );
};

export default Recursos;
