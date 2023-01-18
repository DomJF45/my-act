import React from 'react'
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts'

const CoreProcessRadar = (props) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart outerRadius={150} data={props.data.value_score}>
        <PolarGrid />
        <PolarAngleAxis dataKey={'process'} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name={props.data.userName} dataKey='user' stroke="#9747FF" fill="#9747FF" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default CoreProcessRadar