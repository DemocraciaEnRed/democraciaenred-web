import React from "react";
import { useIntl } from "gatsby-plugin-intl";

const InternalPageHero = ({ data }) => {
  const intl = useIntl();
  return (
    <section className="hero is-medium has-background-black">
      <div className="hero-body has-text-centered ">
        <div className="columns is-justify-content-center">
          <div className="column is-9">
            <h1 className="has-text-purple is-spaced  mb-5">
              {intl.formatMessage({ id: data.title })}
            </h1>
            <p className="mx-auto subtitle has-text-white" dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: data.description })}}></p>    
          </div>
        </div>
      </div>
    </section>
  );
};
export default InternalPageHero;
