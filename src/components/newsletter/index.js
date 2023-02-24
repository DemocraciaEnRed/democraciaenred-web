import React from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import "./styles.scss";
import preview from "./assets/newsletterPreview.png"

const Newsletter = ({ data }) => {
  const intl = useIntl();

  return (
    <section id="newsletter" className="bg-dark py-2">
      <hr className="coloured-divider-left" />
      <div className="columns mt-0 mx-0 section mb-0 pb-3 pt-4">
        <div className="column is-one-quarter is-mobile">
          <img src={preview}></img>
        </div>
        <div className="column is-two-thirds">
          <h1 className="has-text-white is-spaced mb-3">
            {intl.formatMessage({ id: data.title })}
          </h1>
          <h2 className="has-text-white is-spaced mb-3">
            {intl.formatMessage({ id: data.description })}
          </h2>
          <Link className="button button-disabled-shadow has-no-background is-rounded is-medium is-warning is-outlined is-uppercase is-inline-block"
            to={data.link}>
            {intl.formatMessage({ id: data.button })}
          </Link>
        </div>
      </div>
      <hr className="coloured-divider-right" />
    </section>
  );
};

export default Newsletter;
