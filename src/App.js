import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import TemperatureChart from "./components/TemperatureChart";
import WeatherCards from "./components/WeatherCards";
import WindChart from "./components/WindChart";
import Masthead from "./components/masthead/Masthead";

function App() {
  const [ip, setIP] = useState("");
  const [locationData, setLocationData] = useState({
    state: "",
    city: "",
    country: "",
  });
  const [detailedForecast0, setDetailedForecast0] = useState("");
  const [completeForecast, setCompleteForecast] = useState([]);

  //creating function to load ip address from the API
  const getIpData = async () => {
    try {
      const res = await axios.get("https://geolocation-db.com/json/");
      console.log(res.data);
      setIP(res.data.IPv4);
      setLocationData({
        state: res.data.state,
        city: res.data.city,
        country: res.data.country_name,
      });
      getPointData(res.data.latitude, res.data.longitude);
    } catch {
      console.error("Unable to fetch data from geolocation API");

      setLocationData({
        state: "Illinios",
        city: "Chicago",
        country: "United States",
      });
      getPointData(41.881832, -87.623177);
    }
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getIpData();
  }, []);

  const getPointData = async (latitude, longitude) => {
    const res = await axios.get(
      `https://api.weather.gov/points/${latitude},${longitude}`
    );
    console.log("THE POINT DATA: ", res.data);
    console.log("THE FORECAST URL: ", res.data.properties.forecast);
    getForecastInfo(res.data.properties.forecast);
  };
  const getForecastInfo = async (forecastURL) => {
    const res = await axios.get(forecastURL);
    console.log("THE FORECAST DATA: ", res.data);
    console.log(
      "THE FORECAST DATA: ",
      res.data.properties.periods[0].detailedForecast
    );
    setDetailedForecast0(res.data.properties.periods[0].detailedForecast);
    setCompleteForecast(res.data.properties.periods);
  };

  return (
    <>
      {" "}
      <Masthead />
      <div className="App">
        <h2>Your IP Address is</h2>
        <h4>{ip}</h4>
        {locationData.city !== "" && (
          <h2>
            Weather Data for {locationData.city}, {locationData.state},{" "}
            {locationData.country}
          </h2>
        )}
        {completeForecast.length > 0 && (
          <>
            <h5>Current Weather</h5>
            <p>{detailedForecast0}</p>

            <h5>5 Day Forecast Temperatures</h5>
            {completeForecast.map((obj, index) => (
              <span>
                {obj.name}: {obj.temperature}&deg;{obj.temperatureUnit}
                <br />
              </span>
            ))}
            <WeatherCards completeForecast={completeForecast} />
            <TemperatureChart completeForecast={completeForecast} />
            <WindChart completeForecast={completeForecast} />
          </>
        )}
      </div>
    </>
  );
}
export default App;
