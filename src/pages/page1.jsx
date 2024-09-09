import React, { useState } from 'react';
import '../pages/page1.css';
import { PieChart, Pie, Cell, Label, Tooltip } from 'recharts';
import BarChart from './Tableform/barchart';
const states = [
  "Telangana",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
];

const COLORS = ['#F1C40A', '#5549AC'];

const data1 = [
  { name: 'Active', value: 400 },
  { name: 'Inactive', value: 300 },
];

const data = [
  { adimtcard: 2000, delivery: 1600, pending: 400, cscCenterName: 'kiran CSC Center', contactNumber: 8247720676 },
  { adimtcard: 3000, delivery: 1000, pending: 2000, cscCenterName: 'kumar CSC Center', contactNumber: 8247720676 },
  { adimtcard: 1000, delivery: 100, pending: 900, cscCenterName: 'ravi CSC Center', contactNumber: 8247720676 },
  { adimtcard: 4000, delivery: 1600, pending: 2400, cscCenterName: 'divya CSC Center', contactNumber: 8247720676 },
  { adimtcard: 2000, delivery: 1000, pending: 1000, cscCenterName: 'akhil CSC Center', contactNumber: 8247720676 },
];

function Page1() {
  const [selectedState, setSelectedState] = useState("all");
  const [displayedState, setDisplayedState] = useState("");

  const handleSelectChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit = () => {
    setDisplayedState(selectedState);
  };

  // Total number of employees for display
  const totalEmployees = data1.reduce((total, item) => total + item.value, 0);

  return (
    <div className='main-bg-container'>
      <h1 className='heading'>Admit Card Delivery Details</h1>

      <div className='state-selector-container'>
        <label>Select State:</label>
        <select value={selectedState} onChange={handleSelectChange}>
          <option value="all">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <button onClick={handleSubmit}>Submit</button> 

      <div className='states-names'>
        {/* Display the selected state */}
        {displayedState && displayedState !== "all" ? (
          <p className="states">{displayedState}</p>
        ) : (
          <p className='states'>Please select a state.</p>
        )}
      </div>

      {/* ---------Pie Chart ----------*/}
      <div className='piechart-bg'>
        <div className='piechart'>
          <PieChart width={400} height={400}>
            <Pie
              data={data1}
              cx={200}
              cy={200}
              innerRadius={90}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {COLORS.map((color, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
              <Label
                value={`Total Employees: ${totalEmployees}`}
                position="center"
                fontSize={16}
                fontWeight={800}
                fill="#333"
              />
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        {/*---------two----------*/}
        <div className='admitcard-bg'>
          <div className='admit'>
            <h1 className='card-name'>Admit Cards Received</h1>
            <p className='total'>23456666</p>
          </div>

          <div className='delivery-bg'>
            <h1 className='card-name1'>Admit Cards Delivery</h1>
            <p className='total1'>12345666</p>
          </div>
        </div>
      </div>


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
                <td>{item.cscCenterName}</td>
                <td>{item.contactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <BarChart data={data} />
      </div>
    </div>
  );
}

export default Page1;
