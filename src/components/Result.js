import React from 'react'

const Result = ({data}) => {
  return (
    <div>
      <div className="Bottom">
        <div className="Feelse">
          <p>Temperature: {data?.main?.temp}</p>
        </div>
        <div className="Feels_like">
          <p>Feels like: {data?.main?.feels_like}</p>
        </div>
        <div className="Humidity">
          <p>Humidity: {data?.main?.humidity}</p>
        </div>
        <div className="Pressure">
          <p>Pressure: {data?.main?.pressure}</p>
        </div>
      </div>
    </div>
  );
}

export default Result