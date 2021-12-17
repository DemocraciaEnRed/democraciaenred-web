import React from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import { PopupButton } from "@typeform/embed-react";
import Pie from "../chart/Pie";

const TransparencySection = ({ data }) => {
  const intl = useIntl();

  return (
    <section id="transparency" className="has-background-light">
      <div className="section">
        <div className="columns mb-6">
          <div className="column">
            <h1 className="title is-spaced">
              {intl.formatMessage({ id: data.subtitle })}
            </h1>
          </div>
          <div>
            <Link
              className="mt-0 button button-disabled-shadow has-no-background is-rounded is-medium is-dark is-outlined is-uppercase is-inline-block"
              to={data.link}
            >
              {intl.formatMessage({ id: "see_more" })}
            </Link>
            <PopupButton
              id="fSqwwL"
              className="mt-0 mx-2 button button-disabled-shadow has-no-background is-rounded is-medium is-dark is-outlined is-uppercase is-inline-block "
            >
              {intl.formatMessage({ id: "contact" })}
            </PopupButton>
          </div>
        </div>

        <p className="">{intl.formatMessage({ id: data.description_home })}</p>
      </div>
      <div className="columns mx-0 is-justify-content-center pb-6">
        <div className="mx-6 mb-6">
          <Pie chartData={data.chartPieIncomes} />
        </div>
        <div className="mx-6">
          <Pie chartData={data.chartPieOutcomes} />
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
