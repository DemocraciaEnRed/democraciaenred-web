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
import dataUs from "../../content/us.json";
// import Balance from "../components/balance-sheets";

const QuienesSomos = () => {
  return (
    <React.Fragment>
      <Layout>
        <UsHeader data={dataUs} />
        <Mision data={dataUs} />
        <Memories data={dataUs} />
        {/* <Balance /> */}
        <TeamSlider slides={teamData} title={dataUs} />
        <Claim />
        <WorkWith />
      </Layout>
    </React.Fragment>
  );
};

export default QuienesSomos;
