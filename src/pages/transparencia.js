import React from "react";
import "./styles.scss";
import InternalPageHero from "../components/internal-page-hero";
import dataTransparency from "../../content/transparency.json";
import Division from "../components/division";
import Transparency from "../components/transparency";
import Layout from "../components/layout";
import Balance from "../components/balance-sheets";

const Transparencia = () => {
  return (
    <React.Fragment>
      <Layout>
        <InternalPageHero data={dataTransparency} background= {"celeste"} />
        <Division />
        <Transparency data={dataTransparency} />
        <Balance /> 
      </Layout>
    </React.Fragment>
  );
};

export default Transparencia;
