import axios from "axios";

const weatherData = async (cityName) => {
  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=a0c2b59a5b124dc789785204211710&q=${cityName}`
  );
  return data;
};

export default weatherData;
