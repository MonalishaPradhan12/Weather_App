import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
const WeatherApp = () => {
    let [weatherInfo,setWeatherInfo]=useState(
        {
            city:"Delhi",
            feelsLike: 24.84,
            temp: 25,
            tempMin: 21,
            tempMax:22,
            humidity:47,
            weather: "Haze"
        }
    );

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
  return (
    <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp