import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import Result from "./components/Result";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(data);

  useEffect(() => {
    if (search === "") return;
    else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b3528849799fc69ab2e46bdd46794f25`
        )
        .then((res) => setData(res?.data));
    }
  }, [search]);

  return (
    <div className="App">
      <div className="Container">
        <div className="Top">
          <div className="Location">
            <h4 className="Title">Weather App</h4>
          </div>
          <div className="Temp">
            <input
              type="text"
              onKeyDown={(e) => e.code === "Enter" && setSearch(e.target.value)}
              placeholder="Enter location"
            />
            <Card name={data?.name} country={data?.sys?.country} />
          </div>
        </div>
        <Result data={data} />
      </div>
    </div>
  );
}

export default App;
