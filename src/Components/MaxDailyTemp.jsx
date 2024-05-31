import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';

const MaxDailyTemp = () => {
    let [maxcurTemp, maxSetCurTemp] = useState(null);
    let [maxcurTime, maxSetCurTime] = useState(null);
    useEffect(()=>{
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=32.735&longitude=-97.108&daily=temperature_2m_max&timezone=America%2FChicago').then((response)=>{
            maxSetCurTemp(response.data.daily.temperature_2m_max)
            maxSetCurTime(response.data.daily.time)
            console.log(response.data.daily.temperature_2m_max)
            console.log(response.data.daily.time)
        })
    },[])
    return(
        <div>
            <BarChart
                xAxis={[{ scaleType: 'band', data: maxcurTime? maxcurTime: [] }]}
                series={[{ data: maxcurTemp? maxcurTemp: [] }]}
                width={700}
                height={300} 
            />
        </div>
    )
}
export default MaxDailyTemp