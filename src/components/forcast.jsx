const Forecast = ({forecastData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    }).format(date);
  };

  return (
    <div
      style={{
        backgroundColor: "#4B5563",
        color: "white",
        borderRadius: "0.5rem",
 
        paddingLeft: "15px",
        paddingRight:'15px',
        paddingTop: "15px",
        paddingBottom: "5px",
      
      }}>
      {forecastData.list.slice(0, 5).map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <div>
            <div style={{fontSize: "20px", fontWeight: "bold"}}>
              {Math.round(item.main.temp)}°c
            </div>
          </div>
          <div>
            <div style={{fontSize: "20px", fontWeight: "bold"}}>
              {formatDate(item.dt_txt)}
            </div>
          </div>
          <div>
            <div style={{fontSize: "20px"}}>{item.weather[0].description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
