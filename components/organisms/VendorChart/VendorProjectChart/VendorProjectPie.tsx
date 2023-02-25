import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            display: false,
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
}

const labels = ['Hyjack Enterprises', 'T-series', 'Dharma Production']

export const data = {
    labels,
    datasets: [
        {
            label: 'Earning (INR)',
            data: [65, 59, 80],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'hsla(41.63265306122449, 57.647058823529406%, 33.333333333333336%, 0.2)',
            ],
            borderRadius: 6,
        },
    ],
}

export const VendorProjectPie = () => (

    <Bar options={options} data={data} />

)
