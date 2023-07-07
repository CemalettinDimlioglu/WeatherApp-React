import react, {useState} from 'react';
import axios from 'axios';

function App() {


  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Ankara</p>
          </div>
          <div className="temp">
            <h1>60 °F </h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
           <p>65 °F</p> 
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
