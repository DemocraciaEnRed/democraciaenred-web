import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./style.scss";

const UsHeader = ({ data , background}) => {
  const intl = useIntl();
  return (
    <section className={`us-header hero is-medium has-background-${background}`} >
      <div className="hero-body has-text-centered ">
        <div className="columns is-justify-content-center">
          <div className="column is-9">
            <h1 className=" is-spaced has-text-white mb-5">
              {intl.formatMessage({ id: data.title })}
            </h1>
            <br /><br />
            <h3 className="mx-auto subtitle has-text-white">
            {intl.formatMessage({ id: data.subtitle })}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsHeader;
