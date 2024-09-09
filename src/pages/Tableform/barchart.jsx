
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';
import '../Tableform/barchart.css';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Initial data for the chart
const chartData = {
  labels: ['may1', 'may2', 'may3', 'may4', 'may5', 'may6',],
  datasets: [
    {
      label: 'Admit Card Delivery Detailes',
      data: [30, 8, 10, 19, 15, 25],
      backgroundColor: ['#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7',],
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      barPercentage: 0.6, // Adjust this value to change the width of the bars
      categoryPercentage: 0.8, // Adjust this value to change the width of the bars
    },
  ],
};

// Options for customizing the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.raw}`;
        }
      }
    }
  },
  scales: {
    x: {
      beginAtZero: true
    },
    y: {
      beginAtZero: true
    }
  }
};
const BarChart = () => {
  return (
    <div>
      <div className='bar-main-div'>
        <div className='bar-chart'>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;