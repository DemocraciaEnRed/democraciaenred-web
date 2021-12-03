import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import ResourcesMansonery from "../resources-mansonery";

const ResourcesHeader = ({ data }) => {
  const intl = useIntl();
  const [filter, setFilter] = useState("all");

  return (
    <section id="resources">
      <div className="columns mt-0 section has-background-dark mb-0 pb-6">
        <div className="column ">
          <h1 className="has-text-yellow is-spaced mb-6">
            {intl.formatMessage({ id: data.subtitle })}
          </h1>
          {data.filter.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setFilter(filter.id)}
              className="m-1 button button-disabled-shadow has-no-background is-rounded is-small is-warning is-outlined is-uppercase is-inline-block"
              to=""
            >
              {intl.formatMessage({ id: filter.name })}
            </button>
          ))}
        </div>
      </div>
      <ResourcesMansonery resources={data} filter={filter} />
    </section>
  );
};

export default ResourcesHeader;
