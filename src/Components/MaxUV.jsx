import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BarChart } from '@mui/x-charts/BarChart';

const MaxUV = () => {
    let [maxUV,setmaxUV] = useState(null)
    useEffect(()=>{
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=32.735&longitude=-97.108&daily=uv_index_max&timezone=America%2FChicago').then((response) => {
        setmaxUV(response.data)
        console.log(response)
        }
    )
},[])
    return (
    <div>
    <BarChart
      xAxis={[{ scaleType: 'band', data: maxUV? maxUV.daily.time: [] }]}
      series={[{ data: maxUV? maxUV.daily.uv_index_max: [] }]}
      width={900}
      height={300}  />
    </div>
    )
}
export default MaxUV
