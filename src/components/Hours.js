import React from 'react'
import Hour from './Hour'

const Hours = ({ weatherData }) => {
  return (
      <>
    {weatherData.list.map((time)=> <Hour time={time} key={time.dt}/>)}
    </>
  )
}

export default Hours