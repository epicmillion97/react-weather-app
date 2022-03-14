import React from 'react' 
import { useState} from 'react'
import Hours from './components/Hours'
import SelectCity from './components/SelectCity';
import Cookies from 'universal-cookie'
import Footer from './components/Footer'


var json = require('./weather.json');
const cookies = new Cookies()



function App() {

  const [weatherData, setWeatherData] = useState(json)
  
  const weatherRequest = (city, state) =>{
  let appid = cookies.get('openweathermapapikey')
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}%2C${state}%2C1&appid=${appid}`)
  .then(res => res.json())
  .then(result => {
    if (result.cod == 401){alert('bad api key'); return};
    console.log(result[0].lat, result[0].lon)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${result[0].lat}&lon=${result[0].lon}&appid=${appid}&units=imperial`)
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setWeatherData(result)
      console.log(weatherData)
    })
  })}


  return (
    <div className="App">
      <h1>5 Day Weather Forecast</h1>
      <SelectCity weatherRequest={weatherRequest}/>
      <h1>{weatherData.city.name}</h1>
      <Hours weatherData={weatherData}/>
      <Footer/>
    </div>
  );
}

export default App;
