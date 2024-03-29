import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './SEOCard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SEOGraph = () => {
  // Assuming you have a base data set for before SEO
  const baseDataBeforeSEO = [20, 50, 60, 40, 80, 30, 45, 60, 70];

  // Start with a base data set for after SEO that's initially the same as before SEO
  const [dataAfterSEO, setDataAfterSEO] = useState([...baseDataBeforeSEO]);

  // Update the chart data state when the slider moves
  const onSliderChange = (value) => {
    // Create a new array for after SEO data, adding the slider's value to each point
    const newDataAfterSEO = baseDataBeforeSEO.map((dataPoint) => dataPoint + value);
    
    // Update the state with the new data array
    setDataAfterSEO(newDataAfterSEO);
  };

  // Chart data using the after SEO data from state
  const chartData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
    datasets: [
      {
        label: 'Before SEO',
        data: baseDataBeforeSEO,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 0,
        tension: 0.3,
      },
      {
        label: 'After SEO',
        data: dataAfterSEO,
        fill: true,
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        borderColor: 'rgba(53, 162, 235, 1)',
        pointRadius: 0,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="seo-graph-container">
    <div className="graph-header">

            <h1>Expect Great Things From SEO Agency</h1>
    </div>

      <Line data={chartData} />
      <Slider
        min={0}
        max={100}
        defaultValue={0}
        onChange={onSliderChange}
        handleStyle={{
          borderColor: 'red',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -14,
          backgroundColor: 'white',
        }}
        trackStyle={{ backgroundColor: 'transparent' }}
        railStyle={{ backgroundColor: 'transparent' }}
      />
    </div>
  );
};

export default SEOGraph;
