import UpcomingWeather from "./UpcomingWeather";
import SideBar from "./SideBar";
import CurrentWeather from "./CurrentWeather";
import clear from './weather-icons/clear.svg';
import drizzle from './weather-icons/drizzle.svg';
import fog from './weather-icons/fog.svg';
import mostlycloudy from './weather-icons/mostlycloudy.svg';
import partlycloudy from './weather-icons/partlycloudy.svg';
import rain from './weather-icons/rain.svg';
import snow from './weather-icons/snow.svg';
import storm from './weather-icons/storm.svg';


const Container = ({ data, error, otherCities }) => {

  const checkId = (id) => {
    if (id < 300) { return storm }
    else if (id > 299 && id < 500) { return drizzle }
    else if (id > 499 && id < 600) { return rain }
    else if (id > 599 && id < 700) { return snow }
    else if (id > 699 && id < 800) { return fog }
    else if (id == 800) { return clear }
    else if (id == 801) { return partlycloudy }
    else if (id > 801 && id < 806) { return mostlycloudy }
  }

  return (
    <main className="container">
      <CurrentWeather data={data} checkId={checkId} error={error} />
      <UpcomingWeather data={data} checkId={checkId} />
      <SideBar otherCities={otherCities} />
    </main>
  )
}

export default Container
