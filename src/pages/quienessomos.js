import React from "react";
import "./styles.scss";
import Layout from "../components/layout";
import UsHeader from "../components/us-header";
import Mision from "../components/mision";
import Claim from "../components/claim";
import TeamSlider from "../components/team-slider";
import WorkWith from "../components/work-with-section";
import Memories from "../components/memories";
import teamData from "../../content/team.json";
import councilData from "../../content/council.json";
import dataUs from "../../content/us.json";
import Division from "../components/division";
// import Balance from "../components/balance-sheets";
import Council from "../components/council";
import SEO from "../components/seo";
const QuienesSomos = () => {
  const title = "Quiénes somos";
  const description = "Somos una organización de la sociedad civil que abre la toma de decisiones públicas.";
  return (
    <React.Fragment>
      <Layout>
        <SEO title={title} description={description} />
        <UsHeader data={dataUs} background= {"verde"}/>
        <Division />        
        <Mision data={dataUs} />
        <Memories data={dataUs} />
        {/* <Balance /> */}
        <TeamSlider slides={teamData} title={dataUs} />
        <Claim />
        <Council staff={councilData} />
        <WorkWith />
      </Layout>
    </React.Fragment>
  );
};

export default QuienesSomos;
