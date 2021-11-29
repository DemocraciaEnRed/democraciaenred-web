import React from "react";
import { Bar as Grafico } from "react-chartjs-2";
import { useIntl } from "gatsby-plugin-intl";

export const Bar = ({ chartData }) => {
  const intl = useIntl();
  const chart = {
    labels: [0, 1, 2, 3, 4, 5].map((i) =>
      intl.formatMessage({ id: chartData.labels[i] })
    ),
    datasets: [
      {
        label: intl.formatMessage({ id: chartData.incomesBar.label[0] }),
        minBarLength: 2,
        backgroundColor: "#219EFF",
        borderColor: "#219EFF",
        borderWidth: 1,
        hoverBackgroundColor: "#219EFF",
        hoverBorderColor: "#219EFF",
        data: [0, 2019402.49, 330325.3, 678800, 3710207.54, 4412196.84],
      },
      {
        label: intl.formatMessage({ id: chartData.incomesBar.label[1] }),
        minBarLength: 2,
        backgroundColor: "#5ce175",
        borderColor: "#5ce175",
        borderWidth: 1,
        hoverBackgroundColor: "#5ce175",
        hoverBorderColor: "#5ce175",
        data: [
          1497115.69, 933012.19, 1346284.39, 2630485.26, 7935275.84, 3352066.77,
        ]
      },
    ],
  };
  return (
    <div className="my-6">
      <h1 className="is-spaced has-text-centered mb-2">{intl.formatMessage({ id: chartData.incomesBar.title })}</h1>
      <Grafico data={chart} datasetIdKey="id" />
    </div>
  );
};

export default Bar;
