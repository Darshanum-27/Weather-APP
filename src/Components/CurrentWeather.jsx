import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const CurrentWeather = () => {
    let [currWeather,setcurrWeather] = useState(null)
    useEffect(()=>{
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=32.735&longitude=-97.108&current=temperature_2m&timezone=America%2FChicago').then((response) => {
            setcurrWeather(response.data)
            console.log(response)
  });

    }, []);

    return (
        <div>
            <p> My Location</p>
            <p>{currWeather? currWeather.current.temperature_2m:"loading"}</p>
        </div>
    )
}
export default CurrentWeather