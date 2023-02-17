import React from 'react';
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import useScreenSize from '../../util/hooks/useScreenSize';
import { iTestData } from './testData';

interface Props {
  data: iTestData
}

const CoreProcessRadar = (props: Props) => {

  const windowSize = useScreenSize();

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart outerRadius={windowSize.width! > 1030 ? 150 : 95} data={props.data.value_score} style={{fontSize: '13px'}}>
        <PolarGrid  />
        <PolarAngleAxis dy={5} dataKey={'process'} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name={props.data.userName} dataKey='user' stroke="#9747FF" fill="#9747FF" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default CoreProcessRadar