import { useEffect, useState } from "react";
import weatherData from "../../data/weatherData";
import Clouds from "../weathear/Clouds";
import Loading from "../UI/Loading";

const Weather = () => {
  const [city, setCity] = useState("tehran");
  const [item, setItem] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // getWeather
  const getWeather = async () => {
    try {
      if (city.trim() !== "") {
        setLoading(true);
        const data = await weatherData(city);
        setItem(data);
        setCity("");
        setError(false);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setCity("");
      setLoading(false);
    }
  };
  //
  useEffect(() => {
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="wrapper">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Please enter city name"
      />
      <button className="btn-search" onClick={() => getWeather()}>
        Search City
      </button>
      <div className="info">
        {!loading ? <Clouds item={item} error={error} /> : <Loading />}
      </div>
    </div>
  );
};

export default Weather;
