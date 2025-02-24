import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
// import { useEffect } from 'react';

function Weather() {
    let [weatherStatus, setWeatherStatus] = useState({
        cityName: "Navi Mumbai",
        description: "smoke",
        feels_like: "29.7",
        humidity: "30",
        temp: "30.97",
        temp_max: "30.97",
        temp_min: "30.97",
        windSpeed: "2.06"
    });

    // useEffect(() => {
    //     setWeatherStatus(() => newRes)
    // },[])

    function updateWeatherStatus(newRes){
        setWeatherStatus(newRes)
    }

    return (
        <>
            <SearchBox updateWeather={updateWeatherStatus} /> 
            <InfoBox weatherStatus={weatherStatus} />
        </>
    )
}

export default Weather