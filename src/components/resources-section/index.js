import React from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import ResourcesMansonery from "../resources-mansonery";

export default ({ resources }) => {
  const intl = useIntl();

  return (
    <section id="resources">
      <div className="columns mt-0 mx-0 section has-background-dark mb-0 pb-6">
        <div className="column is-two-thirds">
          <h1 className="has-text-white title is-spaced mb-6">
            {intl.formatMessage({ id: resources.title })}
          </h1>
          <h2 className="has-text-white is-spaced mb-6">
            {intl.formatMessage({ id: resources.description })}
          </h2>
          <h2 className="has-text-yellow is-spaced mb-6">
            {intl.formatMessage({ id: resources.subtitle })}
          </h2>
          <Link
            className="button button-disabled-shadow has-no-background is-rounded is-medium is-warning is-outlined is-uppercase is-inline-block"
            to={resources.link}
          >
            {intl.formatMessage({ id: "see_more" })}
          </Link>
        </div>        
      </div>
      <ResourcesMansonery home={true} resources={resources} />
    </section>
  );
};
