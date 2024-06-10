// import MaxUV from '../Components/MaxUV';
// import CurrentWeather from '../Components/CurrentWeather'
// import CurrentWind from '../Components/CurrentWind';
import CurrentUV from '../Components/CurrentUV';
// import SunRiseandSunSet from '../Components/SunRiseandSunSet';
// import UVPrediction from '../Components/UVPrediction';
// import CurrentTemp from '../Components/CurrentTemp';
// import DailyHumidity from '../Components/DailyHumidity';
// import MaxDailyTemp from '../Components/MaxDailyTemp';
import React from 'react'
import '../Css/Main.css';

const DataPage = (props) => {
    return(
        <div>
            <div>
                    {/* <p>current Conditions</p>
                    <CurrentWeather/>
                    <CurrentWind/> */}
                    <CurrentUV latitude={props.latitude} longitude={props.longitude}/>
                    {/* <p>Daily Conditions</p>
                    <SunRiseandSunSet/>
                    <DailyHumidity/>
                    <UVPrediction/>
                    <CurrentTemp/>
                    <p>Prediction</p>
                    <MaxUV></MaxUV>
                    <MaxDailyTemp/> */}
            </div>
        </div>
    )
}
export default DataPage