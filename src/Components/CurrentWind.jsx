import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const CurrentWind = () => {
    let [currentWind, setCurrentWind] = useState(null)
    useEffect(()=>{
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=32.735&longitude=-97.108&current=wind_speed_10m&timezone=America%2FChicago').then((response) => {
        setCurrentWind(response.data)
        console.log(response.data.current.wind_speed_10m)
        }
    )}, []
)
    return(
        <div>
            <h1>Current wind :{currentWind? currentWind.current.wind_speed_10m:0} KMPH</h1>
        </div>
    )
}
export default CurrentWind;