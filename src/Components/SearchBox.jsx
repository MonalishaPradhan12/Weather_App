import React, { useState } from 'react'
import styles from './SearchBox.module.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
const SearchBox = ({updateInfo}) => {
  // console.log(updateInfo);
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="6d21e6d967df292d274f1ea8f89efbd0";

    let getWeatherInfo=async()=>{
      try{
          let response =await fetch(
             `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
          );
          let jsonResponse= await response.json();
        //   console.log(jsonResponse);
          let result={
            city:jsonResponse.name,
            temp:jsonResponse.main.temp,
            tempMax:jsonResponse.main.temp_max,
            tempMin:jsonResponse.main.temp_min,
            feelsLike:jsonResponse.main.feels_like,
            humidity:jsonResponse.main.humidity,
            weather:jsonResponse.weather[0].description
          }
          console.log(result);
          return result;
        }
        catch(err){
          throw(err);
        }
    }
  
    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (event)=>{
      try{
        event.preventDefault();
        // console.log(city);
        let information=await getWeatherInfo();
        updateInfo(information);
      }
        catch(err){
          setError(true);
        }
       
    }

  return (
    <div className={styles.searchbox} >
        <h2>Search for the weather</h2>
        <form className='my-form' onSubmit={handleSubmit}>
            <TextField label='City Name' id="outlined-basic" placeholder='Enter your city' value={city} onChange={handleChange}></TextField>
            <br/><br/>
            <Button variant="contained" type='submit' >Search</Button>
            {error && <p style={{color:"red"}}>No Such place exists</p>}
        </form>
    </div>
  )
}

export default SearchBox;