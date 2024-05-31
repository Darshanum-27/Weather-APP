import './App.css';
import MaxUV from './Components/MaxUV';
import CurrentWeather from './Components/CurrentWeather'
import CurrentWind from './Components/CurrentWind';
import CurrentUV from './Components/CurrentUV';
import SunRiseandSunSet from './Components/SunRiseandSunSet';
import UVPrediction from './Components/UVPrediction';
import CurrentTemp from './Components/CurrentTemp';
import DailyHumidity from './Components/DailyHumidity';
import MaxDailyTemp from './Components/MaxDailyTemp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1>______current Conditions____________</h1>
          <CurrentWeather/>
          <CurrentWind />
          <CurrentUV></CurrentUV>
        <h1>______Daily Conditions____________</h1>
          <SunRiseandSunSet/>
          <DailyHumidity/>
          <UVPrediction/>
          <CurrentTemp/>
        <h1>_________Prediction________________</h1>
        <MaxUV></MaxUV>
        <MaxDailyTemp />
        </div>
      </header>
    </div>
  );
}

export default App;
