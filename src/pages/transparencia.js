import React from "react";
import "./styles.scss";
import InternalPageHero from "../components/internal-page-hero";
import dataTransparency from "../../content/transparency.json";
import Division from "../components/division";
import Transparency from "../components/transparency";
import Layout from "../components/layout";
import Balance from "../components/balance-sheets";
import SEO from "../components/seo";

const Transparencia = () => {
  const title = "Transparencia";
  const description = "Conocé cómo se generan nuestros ingresos y cómo los gastamos.";
  return (
    <React.Fragment>
      <Layout>
        <SEO title={title} description={description} />
        <InternalPageHero data={dataTransparency} background= {"celeste"} />
        <Division />
        <Transparency data={dataTransparency} />
        <Balance /> 
      </Layout>
    </React.Fragment>
  );
};

export default Transparencia;
