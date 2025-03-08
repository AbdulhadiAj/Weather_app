const WeatherItem = ({data, number, checkId}) => {
    return (
        <div className="item">
            {data.city ? <h4><time dateTime={data.list[number].dt_txt.split(" ")[1]}>{data.list[number].dt_txt.split(" ")[1].substring(0, 5)}</time></h4> : null}
            {data.list ? <img src={checkId(data.list[number].weather[0].id)} alt="item" /> : null}
            {data.list ? <div>Temp : {data.list[number].main.temp} °C</div> : null}
        </div>
    )
}

export default WeatherItem
