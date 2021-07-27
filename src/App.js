import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.scss';

// API - Open Weather Map
const api = 'Paste your API KEY with Opean Weather Map'

function App() {
  const [datas, setDatas] = useState('')
  const [infoWeather, setInfoWeather] = useState({})

  // Function responsible for the capture value in input
  const checkCity = e => {
    setDatas(e.target.value)
  }

  // Function responsible for add data to the array
  const handleClickWeather = e => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${datas}&appid=${api}&units=metric`)
    .then(response => {
      if(response.ok) {
        return response
      }
    })
    .then(response => response.json())
    .then(data => {
      setInfoWeather(data)
    })
    .catch(err => console.log('Houston, we have problem. Please, try again!'))
    setDatas('')
  }

  // This option check and set your current location
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api}&units=metric`)
      .then(response => response.json())
      .then(data => setInfoWeather(data))
      .catch(err => console.log('Houston, we have problem. Please, try again!'))
    });
  }, [])

  return (
    <div className='app'>
      <Form handleClickWeather={handleClickWeather} checkCity={checkCity} datas={datas}/>
      <Weather infoWeather={infoWeather}/>
    </div>
  );
}


export default App;
