const CurrentWeather = ({ data, checkId, error }) => {

    return (
        <section className="currentWeather">
            {data.city ? <h3 className="h3">{data.city.name} Now {data.list ? <time dateTime={data.list[0].dt_txt.split(" ")[1].substring(0, 5)}>{data.list[0].dt_txt.split(" ")[1].substring(0, 5)}</time> : null} </h3> : <h1 className="error">{error}</h1>}
            {data.list ? <img src={checkId(data.list[0].weather[0].id)} alt="current weather" className="weather-img" /> : null}
            {data.list ?
                <ul>
                    <li>{data.list[0].weather[0].main}</li>
                    <li>Temperature : {data.list[0].main.temp} °C</li>
                    <li>Humidity : {data.list[0].main.humidity} %</li>
                    <li>Pressure : {data.list[0].main.pressure} pascal</li>
                </ul>
                : null}
        </section>
    )
}

export default CurrentWeather