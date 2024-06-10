import React from 'react'
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import {useState, useEffect} from 'react';
import axios from 'axios';

const CurrentUV = (props) =>{
    let [currUV, setCurrentUV] = useState(null);
    console.log(props.latitude)
    useEffect((props)=>{
            axios.get('https://api.open-meteo.com/v1/forecast?latitude='+props.latitude+'&longitude='+props.latitude+'&hourly=uv_index&timezone=America%2FChicago&forecast_hours=1').then((response) => {
            setCurrentUV(response.data)
            console.log(response.data)
            }
        )
    },[props])
return(
    <div>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
            <Gauge width={100} height={100} value={currUV? currUV.hourly.uv_index: 0} valueMin={0} valueMax={11} />
        </Stack>
    </div>
)
}
export default CurrentUV