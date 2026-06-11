import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./styles.scss";
import NewsletterTypeForm from "../newsletter-typeform";
import newsletterIcon from "./assets/newsletter.svg";

const Newsletter = ({ data }) => {
  const intl = useIntl();

  return (
    <section id="newsletter" className="newsletter-grey py-2">
      <div className="columns is-vcentered mt-0 mx-0 section mb-0 pb-3 pt-4">

        <div className="column is-flex is-justify-content-center">
          <div className="newsletter-hex-wrapper">
            <div className="hex-container newsletter-hex">
              <div className="hex-container-inner">
                <div className="hex-container-inner-2 newsletter-hex-bg"></div>
              </div>
            </div>
            <img src={newsletterIcon} className="newsletter-hex-icon" alt="" />
          </div>
        </div>

        <div className="column is-two-thirds">
          <h1 className="has-text-white is-spaced mb-3">
            {intl.formatMessage({ id: data.title })}
          </h1>
          <h2 className="has-text-white is-spaced mb-3">
            {intl.formatMessage({ id: data.description })}
          </h2>
          <NewsletterTypeForm button={intl.formatMessage({ id: data.button })} TFid={data.tfid}/>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
