import React,{useState,useEffect} from 'react'
import {Bar as Grafico} from 'react-chartjs-2'

export const Bar = ({chartData}) => {
    const chart={
        labels:chartData.labels,
        datasets: chartData.map(datasets=>datasets)[{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 20,
            minBarLength: 2,
            data: chartData.data_1
        },
        {
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: chartData.data_2
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

export default Bar