import React from "react";
import Pie from "../chart/Pie";
import BarIncomes from "../chart/BarIncomes";
import BarOutcomes from "../chart/BarOutcomes";
import { useIntl } from "gatsby-plugin-intl";

export default function Transparency({ data }) {
  const intl = useIntl();

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
          <div className="mx-6 pie-incomes-container">
            <Pie chartData={data.chartIncomes} />
          </div>
          <div className="mx-6">
            <Pie chartData={data.chartOutcomes} />
          </div>
        </div>
        <h1 className="is-spaced has-text-centered mb-2">
          {intl.formatMessage({ id: data.evolution.title })}
        </h1>
        <div className="columns is-justify-content-center ">
          <div class="column is-10 is-12-tablet">
            <BarIncomes chartData={data.chartEvolution} />
          </div>
        </div>
        <div className="columns is-desktop is-justify-content-center ">
          <div class="column is-10 is-12-tablet">
            <BarOutcomes chartData={data.chartEvolution} />
          </div>
        </div>
        <div className="is-flex is-justify-content-center">
        <a
          className="button button-disabled-shadow has-no-background is-rounded is-medium is-dark  is-uppercase is-inline-block"
          href="https://drive.google.com/drive/u/0/folders/18FqJdWg7Ucj6sey126T_SQPUQv0hZFyy"
          target="_blank"
        >
          {intl.formatMessage({ id: data.balance_button })}
        </a>
        </div>
        
      </section>
    </div>
  );
}
