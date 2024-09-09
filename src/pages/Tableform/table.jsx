import React from 'react';
import '../Tableform/table.css'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';
import '../Tableform/barchart.css';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
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

function Table() {


    const states =[
        "Telangana",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
    ]

  const data = [
    { adimtcard: 2000, delivery: 1600, pending: 400, cscCenterName: 'kiran CSC Center', contactNumber: 8247720676 },
    { adimtcard: 3000, delivery: 1000, pending: 2000, cscCenterName: 'kumar CSC Center', contactNumber: 8247720676 },
    { adimtcard: 1000, delivery: 100, pending: 900, cscCenterName: 'ravi CSC Center', contactNumber: 8247720676 },
    { adimtcard: 4000, delivery: 1600, pending: 2400, cscCenterName: 'divya CSC Center', contactNumber: 8247720676 },
    { adimtcard: 2000, delivery: 1000, pending: 1000, cscCenterName: 'akhil CSC Center', contactNumber: 8247720676 },
  ];

  return (
    <div className='table-bg-container'>

        <h2 className='welcome'>Welcome <span className='fathima'>Fathima!</span></h2>
        <h3 className='admit-name'>Admimit Card Delivery Details</h3>

       <div className='state-selector-container'>

       <label>Select State:</label>
        <select>
            <option value="all">Andhra Pradesh</option>
            {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
            ))}
        </select>
       </div>
       <button>Submit</button>

            <div className='table-form-div'>
            <table className='table-1'>
        <thead>
          <tr className='admit-details'>
            <th>Admit Card Received</th>
            <th>Admit Card Delivered</th>
            <th>Admit Card Pending</th>
            <th>CSC Center Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.adimtcard}</td>
              <td>{item.delivery}</td>
              <td>{item.pending}</td>
              <td >{item.cscCenterName}</td>
              <td>{item.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className='bar-main-div'>
      <div className='bar-chart'>
              <Bar  className="bar"data={chartData} options={options} />
            </div>
      </div>
           
          </div>
  );
}

export default Table;
