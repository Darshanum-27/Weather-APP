import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';

const DailyHumidity = () =>{
    let [humidty,setHumidty] = useState(null)
    useEffect(()=>{
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=32.735&longitude=-97.108&hourly=relative_humidity_2m&timezone=America%2FChicago').then((response) => {
            setHumidty(response.data.hourly.relative_humidity_2m
            )
        }
    )
    },[])
    return (
        <div>
            <LineChart
                xAxis={[{ data: Array.from({length:24}, (v,i) => i)}]}
                series={[
                    {
                    data: humidty? humidty.slice(0,24):[0],
                    },
                ]}
                height={300}
                margin={{ left: 40, right: 40, top: 40, bottom: 40 }}
                grid={{ vertical: true, horizontal: true }}
            />
        </div>
    )
}
export default DailyHumidity