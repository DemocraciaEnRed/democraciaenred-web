import React from "react";
import { useIntl } from "gatsby-plugin-intl";
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

const Conocenos = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Layout>
        <SEO
          title={intl.formatMessage({ id: "us" })}
          description={intl.formatMessage({ id: "pages.conocenos_seo_description" })}
        />
        <PageHero
          color="#ff9b73"
          title={intl.formatMessage({ id: "usSection.title" })}
          subtitle={[
            intl.formatMessage({ id: "usSection.subtitle_1" }),
            intl.formatMessage({ id: "usSection.subtitle_2" })
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
};

export default Conocenos;
