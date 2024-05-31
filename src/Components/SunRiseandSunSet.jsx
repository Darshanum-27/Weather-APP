import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const SunRiseandSunSet = () => {
    let [sunRise, setSunRise] = useState(null)
    let [sunSet, setSunSet] = useState(null)
    useEffect(()=>{
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=32.735&longitude=-97.108&daily=sunrise,sunset&timezone=America%2FChicago').then((response) => {
        setSunRise(response.data.daily.sunrise)
        setSunSet(response.data.daily.sunset)
        }
    )}, []
)
    return(
        <div>
            <h1>SunRise: {sunRise? sunRise[0]:"00:00"} </h1>
            <h1>SunSet: {sunSet? sunSet[0]:"00:00"} </h1>
        </div>
    )
}
export default SunRiseandSunSet;