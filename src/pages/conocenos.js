import React from "react";
import "./styles.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Division from "../components/division";
import UsSection from "../components/us-section";
import dataUs from "../../content/us-section.json";
import EjesEstrategicos from "../components/ejes-estrategicos";
import Mision from "../components/mision";
import dataUsPage from "../../content/us.json";
import TeamGrid from "../components/team-grid";
import teamData from "../../content/team.json";
import Council from "../components/council";
import councilData from "../../content/council.json";
import Balance from "../components/balance-sheets";

const Conocenos = () => (
  <React.Fragment>
    <Layout>
      <SEO title="Conocenos" description="Somos una organización de la sociedad civil que abre la toma de decisiones públicas." />
      <UsSection data={dataUs} />
      <EjesEstrategicos />
      <Mision data={dataUsPage} />
      <Division />
      <TeamGrid slides={teamData} title={dataUs} />
      <Division />
      <Council staff={councilData} />
      <Balance />
    </Layout>
  </React.Fragment>
);

export default Conocenos;
