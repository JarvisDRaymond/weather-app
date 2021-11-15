const TechInfo = () => {
    return (
        <div className='techInfo'>
            <h2>Technical Information</h2>
            <div className='techContent'>
                This works by first querying a geolocation API to map your IP address to its longitude and latitude coordinates. If your IP address cannot
                be determined, it defaults to Chicago, Illinois. The coordinates
                are then sent to a weather forecast point API that maps the coordinates to a forecast data API. Next the forecast data API
                is queried and resulting data visualized using React and D3. 
            </div>

        </div>
    )

}

export default TechInfo;