import React from "react";
import { useIntl } from "gatsby-plugin-intl";

const InternalPageHero = ({ data, background }) => {
  const intl = useIntl();
  return (
    <section className={` hero is-medium has-background-${background}`}>
      <div className="hero-body has-text-centered ">
        <div className="columns is-justify-content-center">
          <div className="column is-9">
            <h1 className="has-text-white is-spaced  mb-5">
              {intl.formatMessage({ id: data.title })}
            </h1>
            {
            data.description?
            <p className="mx-auto subtitle has-text-white" dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: data.description })}}></p>:
            null
            }
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default InternalPageHero;
