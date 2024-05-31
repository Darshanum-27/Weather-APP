import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';

const CurrentTemp = () => {
    let [curTemp, setCurTemp] = useState(null);
    useEffect(()=>{
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=32.735&longitude=-97.108&hourly=temperature_2m&timezone=America%2FChicago').then((response)=>{
            setCurTemp(response.data.hourly.temperature_2m)
            console.log(response.data.hourly.temperature_2m)
        })
    },[])
    return(
        <div>
            <BarChart
                xAxis={[{ scaleType: 'band', data: curTemp? Array.from({ length: 24 }, (v, i) => i): [] }]}
                series={[{ data: curTemp? curTemp.slice(0,24): [] }]}
                width={700}
                height={300} />
        </div>
    )
}
export default CurrentTemp