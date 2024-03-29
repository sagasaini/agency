import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, Filler, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Filler,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const GraphComponent = () => {
  const [dataAfterSEO, setDataAfterSEO] = useState([40, 50, 60, 80, 100, 80, 60, 40, 30]);

  // Function to shift the data to the left
  const shiftLeft = () => {
    setDataAfterSEO(dataAfterSEO => {
      const newData = [...dataAfterSEO];
      newData.push(newData.shift()); // Remove the first item and add it to the end
      return newData;
    });
  };

  // Function to shift the data to the right
  const shiftRight = () => {
    setDataAfterSEO(dataAfterSEO => {
      const newData = [...dataAfterSEO];
      newData.unshift(newData.pop()); // Remove the last item and add it to the beginning
      return newData;
    });
  };

  const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
    datasets: [
      {
        label: 'BEFORE SEO',
        data: [20, 10, 15, 10, 25, 20, 15, 10, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'AFTER SEO',
        data: dataAfterSEO,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: true,
      }
    ],
  };

  return (
    <>
      <Line data={data} />
      <button onClick={shiftLeft}>Shift Left</button>
      <button onClick={shiftRight}>Shift Right</button>
    </>
  );
};

export default GraphComponent;
