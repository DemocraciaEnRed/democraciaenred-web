import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import ResourcesMansonery from "../resources-mansonery";
import "./styles.scss";
const ResourcesHeader = ({ data }) => {
  const intl = useIntl();
  const [filter, setFilter] = useState("all");

  return (
    <section id="resources">
      <div className="columns bg-dark mx-0 mt-0 section mb-0 pb-6">
        <div className="column ">
          <h1 className="has-text-yellow is-spaced mb-6">
            {intl.formatMessage({ id: data.subtitle })}
          </h1>
          {data.filter.map((filter, index) => (
            <button
              key={index}
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
