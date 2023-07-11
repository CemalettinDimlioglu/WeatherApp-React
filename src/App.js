 import react,  {useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  // const [celsius, setCelsius] = useState(0);
  const [location, setLocation] = useState('')
 console.log(react);

  const url = "";

const searchLocation =(event)=>{
  if(event.key==='Enter'){
  axios.get(url).then((response)=>{
  setData(response.data);
  console.log(response.data);
  })
  setLocation('')
  }
  
}

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          {/* <div className="temp">
            {data.main ? (
              <h1>{(((data.main.temp - 32) * 5) / 9).toFixed(1)}°C</h1>
            ) : null}
          </div> */}
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F </h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
              <p className="bold">65 °F</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p className="bold">20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()}MPH</p>
              ) : null}

              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
