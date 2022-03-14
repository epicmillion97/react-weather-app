import React, { useState} from 'react'
import { FaCog } from 'react-icons/fa'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const SelectCity = ({ weatherRequest }) => {

    const [showCitySelect, setShowCitySelect] = useState(true)
    const [city, setCity] = useState('Dallas')
    const [state, setState] = useState('TX')
    const [apiKey, setApiKey] = useState(cookies.get('openweathermapapikey'))

    const onSubmit = (e) => {
        e.preventDefault()
        if(!city){
            alert('Please add a city!')
            return
        }
        if(!state){
            alert('Please add a state!')
            return
        }
        setShowCitySelect(false)
        cookies.set('openweathermapapikey', `${apiKey}`, { path: '/'})
        weatherRequest(city, state)
    }

  return (
      <div>
          <FaCog className='FaCog' onClick={()=> {setShowCitySelect(!showCitySelect)}}/>
          {showCitySelect ? <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>City</label>
                <input type="text" placeholder='Dallas' value={city} onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>State</label>
                <input type="text" placeholder='TX' value={state} onChange={(e) => setState(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>ApiKey</label>
                <input type="text" placeholder='openweatherapikey' value={apiKey} onChange={(e) => setApiKey(e.target.value)}/>
            </div>
            <input type="submit" value='Get Weather' className='btn'/>

        </form>: <></>}
        
        </div>
  )
}

export default SelectCity