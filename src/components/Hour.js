import React from 'react'

const Hour = ({ time }) => {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return (
    <div id={time.dt} className="hourDiv">
        <p className="dt_txt">{time.dt_txt.slice(10)} {daysOfTheWeek[(new Date(time.dt_txt)).getDay()]}</p>
        <p className="temp">{time.main.temp} F</p>
        <img className="weatherIcon" src={`https://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png`} alt="weather"/>
        <p className="description">{time.weather[0].description}</p>
    </div>
  )
}

export default Hour