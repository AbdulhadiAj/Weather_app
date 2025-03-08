import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const api_key = "f075470b621538710ea6eed8b2bd551f";
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${api_key}`;

  const putCity = (e) => {
    setCity(e.target.value);
  };

  const searchLocation = (e) => {
    e.preventDefault();
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="page">
      <Header onChange={putCity} onSubmit={searchLocation} />
      <Navigation />
      <Container
        data={data}
        error={error}
        otherCities={(e) => {
          setCity(e.target.innerHTML);
          searchLocation(e);
        }}
      />
    </div>
  );
}

export default App;
