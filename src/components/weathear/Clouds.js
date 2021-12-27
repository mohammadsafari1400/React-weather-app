const Clouds = ({ item, error }) => {
  const { location, current } = item;
  return (
    <ul className="clouds">
      {!error ? (
        <li className="cloud">
          <div className="temp">
            <h5 className="temp-c">
              <span>{current?.temp_c}</span>
              <i className="fas fa-temperature-low"></i>
            </h5>
            <h5 className="wind">
              <span>{current?.wind_kph}</span>
              <i className="fas fa-wind"></i>
            </h5>
            <h5 className="humidity">
              <span>{current?.humidity}</span>
              <i className="fas fa-water"></i>
            </h5>
          </div>
          <div className="location">
            <h5 className="country">
              <i className="fas fa-globe"></i>
              <span>{location?.country}</span>
            </h5>
            <h5 className="marker">
              <i className="fas fa-map-marker-alt"></i>
              <span>
                {location?.region} , {location?.name}
              </span>
            </h5>
          </div>

          <div className="sky-icon">
            <img src={current?.condition?.icon} alt="weater" />
          </div>
        </li>
      ) : (
        <p className="error">This city does not exist</p>
      )}
    </ul>
  );
};

export default Clouds;
