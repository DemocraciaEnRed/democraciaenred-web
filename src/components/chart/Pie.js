import React from "react";
import { Pie as Grafico } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useIntl} from "gatsby-plugin-intl";

export const Pie = ({ chartData }) => {
  const intl = useIntl();
  const chart = {
    labels: chartData.labels,
    datasets: chartData.datasets
  };

  const label = (context) => {
   
    let lbl = context.label+' '+ context.formattedValue+' ' + '%'
    return lbl
  }
  const chartOptions = { 
    plugins:{
      tooltip: {
        callbacks: {
            label: label,
        }, 
        
  
    },
    }
   

    }
  
  return (
    <div>
      <h1 className="has-text-centered mb-4">{intl.formatMessage({ id:chartData.title})}</h1>
      <Grafico options={chartOptions}  data={chart} datasetIdKey="id" />
    </div>
  );
};

export default Pie;
