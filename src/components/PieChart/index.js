import React from 'react';
import { Pie } from 'react-chartjs-2';

import './index.css'

const PieChart = (props) => {
  
      const {chartData} = props
  
      return (
        <div className='pie-chart-properties'>
            <Pie
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                {
                    label: '# of votes',
                    data: chartData.elements,
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
                ],
            }}
            options={{
            title:{
                fontSize:25
            },
            }}
        />
        <h2>Pie Chart</h2>
        <hr/>   
      </div>
      )
  }

export default PieChart;