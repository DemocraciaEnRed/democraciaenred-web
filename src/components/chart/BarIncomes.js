import React from "react";
import { Bar as Grafico } from "react-chartjs-2";
import { useIntl } from "gatsby-plugin-intl";
import './style.scss'

export const Bar = ({ chartData }) => {
  const intl = useIntl();
  const chart = {
    labels: [0, 1, 2, 3, 4, 5].map((i) =>
      intl.formatMessage({ id: chartData.labels[i] })
    ),
    datasets: [
      {
        label: intl.formatMessage({ id: chartData.incomesBar.label[0] }),

        backgroundColor: "#88CBFF",
        borderColor: "#88CBFF",
        borderWidth: 1,
        hoverBackgroundColor: "#88CBFF",
        hoverBorderColor: "#2e6087",
        data: [0, 2019402.49, 330325.3, 678800, 3710207.54, 4412196.84],
      },
      {
        label: intl.formatMessage({ id: chartData.incomesBar.label[1] }),

        backgroundColor: "#69D69D",
        borderColor: "#5ce175",
        borderWidth: 1,
        hoverBackgroundColor: "#69D69D",
        hoverBorderColor: "#308a5b",
        data: [
          1497115.69, 933012.19, 1346284.39, 2630485.26, 7935275.84, 3352066.77,
        ]
      },
    ],
  };
  const chartOptions={
    maintainAspectRatio:false,
    responsive: true,
  }
  return (
    <div className="my-6">
      <h1 className="is-spaced has-text-centered mb-3 has-text-black">{intl.formatMessage({ id: chartData.incomesBar.title })}</h1>
      <div className="is-relative canvas-container">
        <Grafico options={chartOptions} data={chart} datasetIdKey="id" />
      </div>
    </div>
  );
};

export default Bar;
