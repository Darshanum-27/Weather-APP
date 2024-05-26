import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const CurrentWeather = () => {
    let [currWeather,setcurrWeather] = useState(null)
    useEffect(()=>{
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=32.81&longitude=-96.84&current=temperature_2m').then((response) => {
            setcurrWeather(response.data)
            console.log(response)
  });

    }, []);

    return (
        <div>
            <h1> My Location</h1>
            <h1>Irving</h1>
            <h1>{currWeather? currWeather.current.temperature_2m:"loading"}</h1>
        </div>
    )
}
export default CurrentWeather