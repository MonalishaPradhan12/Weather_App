import React from 'react'
import styles from './infoBox.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
const InfoBox = ({info}) => {
    // const INIT_URL = "https://images.unsplash.com/photo-1667591042027-c2f5a4b7ddfd?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL ="https://images.unsplash.com/photo-1546274527-9327167dc1f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1641048350693-4710a172e3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return (
        <div className={styles.infoBox}>
            <h2>Weather Info
                <br />
                {info.weather}
            </h2>
            <div className={styles.container}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?RAIN_URL:info.temp>30?HOT_URL:COLD_URL}//if humidity greater than 80 then its RAIN_URL(raining) using ternary operator again chack if temperature greater than 30deg then HOT_URL OR COLD_URL
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {info.city} {info.humidity>80?<ThunderstormIcon/>:info.temp>30?<WbSunnyIcon/>:<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature {info.temp} &deg;C
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Humidity {info.feelsLike} 
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Min Temp {info.tempMin} &deg;C
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Max Temp {info.tempMax} &deg;C
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                           The weather can be described as {info.weather} and feels like {info.temp}&deg;C
                        </Typography>
                    </CardContent>
                   
                </Card>
            </div>
        </div>
    )
}

export default InfoBox