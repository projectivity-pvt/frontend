import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js'

interface Props {}

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June']

export const data = {
  labels,
  datasets: [
    {
      label: 'Earning (INR)',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderRadius: 6,
    },
  ],
}

export const VendorChart = (props: Props) => (
  <div>
    <Bar options={options} data={data} />
  </div>
)
