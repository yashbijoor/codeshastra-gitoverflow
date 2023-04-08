import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../css/Map1.css'
const data = [
  {
    name: 'Housing',
    expense: 4000,
    
    
  },
  {
    name: 'Travelling',
    expense: 3000,
    
    
  },
  {
    name: 'Food',
    expense: 2000,
    
    
  },
  {
    name: 'Vacation',
    expense: 2780,
    
  },
  {
    name: 'Health',
    expense: 1890,
    
  },
  {
    name: 'Additional',
    expense: 2390,
   
  },
];

const data2 = [
    {
        name: 'January',
        expense: 4500,
      },

      {
        name: 'February',
        expense: 3500,
      },

      {
        name: 'March',
        expense: 5000,
      },


      {
        name: 'April',
        expense: 7000,
      },

      {
        name: 'May',
        expense: 8000,
      },

      {
        name: 'June',
        expense: 6500,
      },

      {
        name: 'July',
        expense: 4500,
      },

]

function Map1(){
    
        return (
            <>
        <div className='map1-container'>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} 
        >
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey="expense" fill="#104D9D" />
        </BarChart>
      </div>
      </>
      
       
        
        );
}

export default Map1


  


