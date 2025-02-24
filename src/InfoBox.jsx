import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css"

function InfoBox({ weatherStatus }) {
    const coldWeather = "https://images.hdqwalls.com/download/field-fog-trees-blue-weather-cold-4k-5k-ee-2560x1440.jpg";
    const hotWeather = "https://wallpaperaccess.com/full/1251841.jpg";
    const rainyWeather = "https://getwallpapers.com/wallpaper/full/9/1/6/699103-rainy-wallpapers-2048x1356-for-hd-1080p.jpg";

    return (
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={
                            weatherStatus.humidity > 80
                                ? rainyWeather
                                : weatherStatus.temp > 15
                                    ? hotWeather
                                    : coldWeather
                        }
                        alt="Weather like"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <span>{weatherStatus.cityName}</span> <br />
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <span>Weather Description: {weatherStatus.description}</span> <br />
                            <span>Feels Like: {weatherStatus.feels_like}</span> <br />
                            <span>Humidity: {weatherStatus.humidity}</span> <br />
                            <span>Temprature: {weatherStatus.temp}</span> <br />
                            <span>Max Temprature: {weatherStatus.temp_max}</span> <br />
                            <span>Min Temprature: {weatherStatus.temp_min}</span> <br />
                            <span>Wind Speed: {weatherStatus.windSpeed}</span> <br />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default InfoBox