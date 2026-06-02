import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Team from "../team";
import "./styles.scss";

const TeamGrid = ({ slides, title }) => {
  const intl = useIntl();

  return (
    <section className="section team-grid">
      <div className="container">
        <h2 className="title mb-6">
          {intl.formatMessage({ id: title.slider_title })}
        </h2>
        <div className="columns is-multiline">
          {slides.map((member, index) => (
            <div key={index} className="column is-one-quarter-desktop is-half-tablet">
              <Team data={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
