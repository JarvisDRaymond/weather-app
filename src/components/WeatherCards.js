import { useRef, useEffect } from "react";
import * as d3 from "d3";

const WeatherCards = ({ completeForecast }) => {
  return (
    <div className="weatherCard">
      {completeForecast.map((obj, i) => {
        if (obj.name === "Tonight") {
          return (
            <div key={i} className="cardData">
              <h3>{obj.name}</h3>
              <img src={obj.icon} alt={obj.shortForecast} />
              {obj.shortForecast}
              {obj.temperature}&deg;{obj.temperatureUnit}
              <br />
            </div>
          );
        }
        else if (!obj.name.includes("Night")) {
          return (
            <div key={i} className="cardData">
              <h3>{obj.name}</h3>
              <img src={obj.icon} alt={obj.shortForecast} />
              {obj.shortForecast}
              {obj.temperature}&deg;{obj.temperatureUnit}
              <br />
            </div>
          );
        }
      })}
    </div>
  );
};

export default WeatherCards;
