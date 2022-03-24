import React from "react";
import "./styles.scss";
import UsHeader from "../components/us-header";
import Mision from "../components/mision";
import TeamSlider from "../components/team-slider";
import teamData from "../../content/team.json";
import WorkWith from "../components/work-with-section";
import dataUs from "../../content/us.json";
import Memories from "../components/memories";
import Layout from "../components/layout";
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
        <WorkWith />
      </Layout>
    </React.Fragment>
  );
};

export default QuienesSomos;
