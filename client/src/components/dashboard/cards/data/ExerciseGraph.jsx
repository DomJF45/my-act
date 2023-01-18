import React from 'react'
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, Legend, Tooltip } from 'recharts'

const ExerciseGraph = (props) => {
  return (
    <>
      <ResponsiveContainer width={'90%'} height={'95%'}>

        <LineChart 
          data={props.data.exerciseData} 
          margin={{top: 40}}
        >
          <XAxis dataKey={'exercise'} />
          <YAxis />
          <Line type='monotone' dataKey='completed' stroke='#9747FF' />
          <Line type='monotone' dataKey='incompleted' stroke='#d5bbf7' />
          <Legend />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default ExerciseGraph