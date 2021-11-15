const WeatherCards = ({ completeForecast }) => {

  return (
    <div className="weatherCard">
      {completeForecast.map((obj, i) => {
        if (obj.name === "Tonight"  && i === 0 ) {
          return (
            <div key={i} className="cardData">
              <h3>{obj.name}</h3>
              <img src={obj.icon} alt={obj.shortForecast} />
              <p>{obj.detailedForecast}</p><br />

              <br />
            </div>
          );
        }
        else if (!obj.name.includes("Night") && !obj.name.includes("Tonight") ) {
          // create Night Data
/*           let nightData;
          console.log('NIGHT DATA!',completeForecast[i+1]);
          if ( completeForecast[i+1] != undefined) {
            nightData = <h3>{completeForecast[i+1].name}</h3><img src={obj.icon} alt={obj.shortForecast} />{obj.shortForecast}<br/>{obj.temperature}&deg;{obj.temperatureUnit};
          }
 */

          return (
            <div key={i} className="cardData">
              <div className="firstHalf">
              <h3>{obj.name}</h3>
              <img src={obj.icon} alt={obj.shortForecast} />
              <p>{obj.detailedForecast}</p><br/>
             {/* {obj.temperature}&deg;{obj.temperatureUnit} */}
              </div>

              {completeForecast[i+1] &&<h3>{completeForecast[i+1].name}</h3>}
              {completeForecast[i+1] && <img src={completeForecast[i+1].icon} alt={completeForecast[i+1].shortForecast} />}
              {completeForecast[i+1] && <p>{completeForecast[i+1].detailedForecast}</p>}
            {/* {completeForecast[i+1] && <>{completeForecast[i+1].temperature}&deg;{completeForecast[i+1].temperatureUnit}</>}*/}

            </div>
          );
        }
      })}
    </div>
  );
};

export default WeatherCards;
