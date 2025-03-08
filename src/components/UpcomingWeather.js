import WeatherItem from "./WeatherItem"

const UpcomingWeather = ({data, checkId}) => {
    return (
        <section className="upcomingWeather">
            {data.city ? <h3 className="h3">The weather on the coming hours</h3>: null}
            {data.list ? <div className="items">
                <WeatherItem data={data} number={1} checkId={checkId} />
                <WeatherItem data={data} number={2} checkId={checkId} />
                <WeatherItem data={data} number={3} checkId={checkId} />
                <WeatherItem data={data} number={4} checkId={checkId} />
                <WeatherItem data={data} number={5} checkId={checkId} />
                <WeatherItem data={data} number={6} checkId={checkId} />
                <WeatherItem data={data} number={7} checkId={checkId} />
            </div> : null}
        </section>
    )
}

export default UpcomingWeather
