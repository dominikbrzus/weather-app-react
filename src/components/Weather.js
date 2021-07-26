import {WiNightCloudyGusts, WiHumidity, WiThermometer, WiSunrise, WiCloudy} from 'weather-icons-react'

// In this section you can see all interface Weather. All values and datas have conditions. 
// npIf coniditon will be 'true' the data will visible.
const Weather = ({infoWeather}) => {
    const {main, name, sys, wind, weather} = infoWeather
    return (
        <div className='weather'>
            <div className='weather__main'>
                {!main && <div className='weather__loading'>
                    <WiCloudy className='weather__loading-icon'/>
                    <p className='weather__loading-info'>Loading ...</p>
                </div>}
                {weather && <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} 
                alt='weather-img' className='weather__img'/>}
                    <span className='weather__info'>{weather && weather[0].description}</span>
                    <h4 className='weather__city'>{main && `${name}, ${sys.country}`}</h4>
                    <h3 className='weather__temp'>{main && `${main.temp.toFixed()}°C`}</h3>
            </div>
            <div className='weather__atmospheric'>
                <div className='weather__pressure'>
                    <WiThermometer className='weather__icon'/>
                    <p className='weather__desc'>Pressure:</p>
                    <p className='weather__value'>{main && `${main.pressure} hPa`}</p>
                 </div>
                <div className='weather__humidity'>
                    <WiHumidity className='weather__icon'/>
                    <p className='weather__desc'>Humidity:</p>
                    <p className='weather__value'>{main && `${main.humidity} %`}</p>
                </div>
                <div className='weather__wind'>
                    <WiNightCloudyGusts className='weather__icon'/>
                    <p className='weather__desc'>Wind:</p>
                    <p className='weather__value'>{main && `${wind.speed} mph`}</p>
                </div>
                <div className='weather__feels-like'>
                    <WiSunrise className='weather__icon'/>
                    <p className='weather__desc'>Feels like:</p>
                    <p className='weather__value'>{main && `${main.feels_like.toFixed()}°C`}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather