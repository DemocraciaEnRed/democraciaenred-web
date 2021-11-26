import React from "react";
import Pie from "../chart/Pie";
import Bar from "../chart/Bar";
import { useIntl } from "gatsby-plugin-intl";

export default function Transparency({ data }) {
  const intl = useIntl();
  console.log(data.chartEvolution)
  return (
    <div>
      <section className="section ">
        <h1 className="is-spaced has-text-centered mb-2">
          {intl.formatMessage({ id: data.balance.title })}
        </h1>
        <h2 className="is-spaced has-text-centered mb-6">
          {intl.formatMessage({ id: data.balance.subtitle })}
        </h2>
        <h2></h2>
        <div className="columns is-justify-content-center pb-6">
          <div className="mx-6">
            <Pie chartData={data.chartIncomes} />
          </div>
          <div className="mx-6">
            <Pie chartData={data.chartOutcomes} />
          </div>
        </div>
        <h1 className="is-spaced has-text-centered mb-6">
          {intl.formatMessage({ id: data.evolution.title })}
        </h1>
        {/* <Bar chartData={data.chartEvolution}/> */}
      </section>
    </div>
  );
}
