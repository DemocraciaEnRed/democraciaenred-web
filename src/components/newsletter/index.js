import React from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import "./styles.scss";
import preview from "./assets/newsletterPreview.png"
import NewsletterTypeForm from "../newsletter-typeform";

const Newsletter = ({ data }) => {
  const intl = useIntl();

  return (
    <section id="newsletter" className="bg-dark py-2">
      <hr className="coloured-divider-left" />
      <div className="columns mt-0 mx-0 section mb-0 pb-3 pt-4 newsletter-bg-position" style={{backgroundImage: {preview}}}>

        <div className="column is-offset-one-quarter is-two-thirds">
          <h1 className="has-text-white is-spaced mb-3">
            {intl.formatMessage({ id: data.title })}
          </h1>
          <h2 className="has-text-white is-spaced mb-3">
            {intl.formatMessage({ id: data.description })}
          </h2>
          <NewsletterTypeForm button={intl.formatMessage({ id: data.button })} TFid={data.tfid}/>
        </div>
      </div>
      <hr className="coloured-divider-right" />
    </section>
  );
};

export default Newsletter;