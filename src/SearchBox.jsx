import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';



function SearchBox({ updateWeather }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = import.meta.env.VITE_API_KEY;


    function handalChange(e) {
        setCity(e.target.value);
    }

    async function handalSubmit(e) {
        try {
            e.preventDefault();
            setCity("");
            let newInfo = await getWeatherData();
            updateWeather(newInfo);
        } catch (e) {
            setError(true)
        }
    }

    async function getWeatherData() {
        try {
            let res = await fetch(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`)
            let info = await res.json();
            let result = {
                cityName: info.name,
                description: info.weather[0].description,
                feels_like: info.main.feels_like,
                humidity: info.main.humidity,
                temp: info.main.temp,
                temp_max: info.main.temp_max,
                temp_min: info.main.temp_min,
                windSpeed: info.wind.speed
            }
            return result;
        } catch (e) {
            throw e;
        }
    }

    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handalSubmit}>
                <h2>Search For The Weather</h2>
                <TextField id="city" name='city' label="City Name" variant="outlined" value={city} onChange={handalChange} /> <br /> <br />
                <Button variant="contained" type='submit'>Search</Button>
                { error ? <p style={{color:"red"}}>No such city found</p> : <></>}
            </form>
        </div>
    )
}

export default SearchBox