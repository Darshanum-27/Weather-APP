import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const UVPrediction = () => {
    let [UVPred, setUVPred] = useState(null)
        useEffect(()=>{
            axios.get('https://api.open-meteo.com/v1/forecast?latitude=32.735&longitude=-97.108&hourly=uv_index&timezone=America%2FChicago').then((response)=>{
                setUVPred(response.data.hourly.uv_index)
            })
        },[])
    return(
        <div>
            <LineChart
            xAxis={[{ data: UVPred? Array.from({ length: 24 }, (v, i) => i): []  }]}
            series={[
                {
                    data: UVPred? UVPred.slice(0,24): [],
                area: true,
                },
            ]}
            width={700}
            height={300}
            />
    </div>
    )
}
export default UVPrediction