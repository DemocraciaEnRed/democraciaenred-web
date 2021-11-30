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
        label: intl.formatMessage({ id: chartData.outcomesBar.label[0] }),
        backgroundColor: "#FFDC5C",
        borderColor: "#FFDC5C",
        borderWidth: 1,
        hoverBackgroundColor: "#FFDC5C",
        hoverBorderColor: "#FFDC5C",
        data: [0, 0, 540900, 368805, 1073626.07, 1129083.82],
      },
      {
        label: intl.formatMessage({ id: chartData.outcomesBar.label[1] }),
        backgroundColor: "#219EFF",
        borderColor: "#219EFF",
        borderWidth: 1,
        hoverBackgroundColor: "#219EFF",
        hoverBorderColor: "#219EFF",
        data: [27593.75, 94031.07, 660411.1, 108363.95, 33837.97, 358970.39],
      },
      {
        label: intl.formatMessage({ id: chartData.outcomesBar.label[2] }),
        backgroundColor: "#9DEDAC",
        borderColor: "#9DEDAC",
        borderWidth: 1,
        hoverBackgroundColor: "#9DEDAC",
        hoverBorderColor: "#9DEDAC",
        data: [51631.08, 81950, 126310, 223747, 237561.31, 950908.83],
      },
      {
        label: intl.formatMessage({ id: chartData.outcomesBar.label[3] }),
        backgroundColor: "#C894FF",
        borderColor: "#C894FF",
        borderWidth: 1,
        hoverBackgroundColor: "#C894FF",
        hoverBorderColor: "#C894FF",
        data: [1547948, 2184899, 1254320, 1727560, 5166089.87, 8378914.83],
      },
      
    ],
  };
  const chartOptions={
    maintainAspectRatio:false,
    responsive: true,
  }
  return (
    <div className="my-6">
      <h1 className="is-spaced has-text-centered mb-3">
        {intl.formatMessage({ id: chartData.outcomesBar.title })}
      </h1>
      <div className="is-relative canvas-container">
        <Grafico options={chartOptions} data={chart} datasetIdKey="id" />
      </div>
    </div>
  );
};

export default Bar;
