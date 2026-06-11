import React from "react";
import "./styles.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHero from "../components/page-hero";
import iconConocenos from "../components/page-hero/assets/conocenos.svg";
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
      <PageHero
        color="#ff9b73"
        title="Quiénes somos"
        subtitle={[
          "Somos una organización conformada por personas activistas, programadoras y científicas sociales que creen en potenciar la inteligencia colectiva para adaptar la democracia al siglo XXI.",
          "Buscamos recuperar la política."
        ]}
        icon={iconConocenos}
      />
      <EjesEstrategicos />
      <Mision data={dataUsPage} />
      <TeamGrid slides={teamData} title={dataUs} />
      <Council staff={councilData} />
      <Balance />
    </Layout>
  </React.Fragment>
);

export default Conocenos;
