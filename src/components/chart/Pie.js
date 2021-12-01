import React from 'react'
import {Pie as Grafico} from 'react-chartjs-2'
import Chart from 'chart.js/auto'

export const Pie = ({chartData}) => {
    const chart={
        labels:chartData.labels,
        datasets:[
            {
                label:chartData.label,
                data:chartData.data,
                backgroundColor:chartData.backgroundColor,
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: chartData.title,
                            color:"#000",
                            padding: {
                                top: 10,
                                bottom: 30
                            },
                            align:"center",
                            position:"top"
                        }
                    }
                }
            }
        ]
    }
    return (
        <div>
            <Grafico
                data={chart} datasetIdKey='id'
            />
        </div>
    )
}

export default Pie
