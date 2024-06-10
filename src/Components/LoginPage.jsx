import React from 'react'
import '../Css/Login.css';
import back from '../Assets/backgroundimg.jpeg'
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { Link } from "react-router-dom";

const LoginPage = (props) => {
    const changeLat = (e) =>{
        props.setLatitude(e.target.value)
    }
    const changeLong = (e) =>{
        props.setlongitude(e.target.value)
    }
    return(
        <div className='twosections'>
            <div>
                <img src={back} alt="" className='LandingImage'/>
            </div>
            <div>
                <div>
                    <Typography level="h4" component="h1">
                        <b>Welcome!</b>
                    </Typography>
                    <Typography level="body-sm">Provide the data.</Typography>
                </div>
                <div>
                    <FormControl>
                    <FormLabel>Latitude</FormLabel>
                    <Input type="email" placeholder="Latitude Eg: 30.140" style={{width: "100vh"}} onChange={(event) => changeLat(event)}/>
                    </FormControl>
                    <FormControl>
                    <FormLabel>Longitude</FormLabel>
                    <Input type="email" placeholder="Longitude Eg: 50.100" style={{width: "100vh"}} onChange={(event) => changeLong(event)}/>
                    </FormControl>
                    <button><Link to="/Display" >Click Me</Link></button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage