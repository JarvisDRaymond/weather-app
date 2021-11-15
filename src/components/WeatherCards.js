const WeatherCards = ({ completeForecast }) => {
  return (
    <div className="weatherCard">
      {completeForecast.map((obj, i) => {
        if (obj.name === "Tonight" && i === 0) {
          return (
            <div key={i} className="cardData">
              <h3>{obj.name}</h3>
              <img src={obj.icon} alt={obj.shortForecast} />
              <p>{obj.detailedForecast}</p>
              <br />

              <br />
            </div>
          );
        } else if (
          !obj.name.includes("Night") &&
          !obj.name.includes("Tonight")
        ) {
          return (
            <div key={i} className="cardData">
              <div className="firstHalf">
                <h3>{obj.name}</h3>
                <img src={obj.icon} alt={obj.shortForecast} />
                <p>{obj.detailedForecast}</p>
                <br />
              </div>

              {completeForecast[i + 1] && (
                <h3>{completeForecast[i + 1].name}</h3>
              )}
              {completeForecast[i + 1] && (
                <img
                  src={completeForecast[i + 1].icon}
                  alt={completeForecast[i + 1].shortForecast}
                />
              )}
              {completeForecast[i + 1] && (
                <p>{completeForecast[i + 1].detailedForecast}</p>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default WeatherCards;
