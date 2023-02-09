import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./styles.scss";

const Newsletter = ({ data }) => {
  const intl = useIntl();

  return (
    <section id="newsletter">
      <div className="columns bg-dark mx-0 mt-0 section mb-0 pb-6">
        <div className="column ">
          <h1 className="has-text-yellow is-spaced mb-6">
            {intl.formatMessage({ id: data.subtitle })}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHeader;
