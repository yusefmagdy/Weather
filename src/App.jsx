import "./App.css";
import WeatherData from "./components/mainWeather";
import Navbar from "./components/navbar";
import {ToastContainer, toast} from "react-toastify";
import {useState, useEffect} from "react";
import axios from "axios";
import Airweather from "./components/AirWerather";
import Forecast from "./components/forcast";

function App() {
  const [weatherD, setWeatherD] = useState();
  const [city, setCity] = useState("london");
  const [air, setAir] = useState();
  const [foreCastee, setForeCastee] = useState();

  const handelClick = (searched) => {
    setCity(searched);
  };

  const fetchLocation = async (lat, lon) => {
    console.log("langtiude and latitude is ...... " + lat + lon);

    const API_KEY = "314fc5844f2101eb4a8a7a25dc7cdecc";
    await axios
      .get(
        `  https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}
`
      )

      .then((resons) => {
        console.log(resons.data.list[0]);
        setAir(resons.data.list[0]);
      })
      .catch((error) => {
        toast.error(error + "Error");
        console.log("Error fetching the air quality data:", error);
      });
  };
  const fetchApi = async () => {
    const apikey = "314fc5844f2101eb4a8a7a25dc7cdecc";
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
      )
      .then((resons) => {
        console.log(resons.data);
        setWeatherD(resons.data);
        fetchLocation(resons.data.coord.lat, resons.data.coord.lon);
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`)
        .then(responsee => {
          setForeCastee(responsee.data);
        })

        console.log(
          "langtiude and latitude is ...... " + resons.data.coord.lat
        );
       
      })

      .catch((error) => {
        toast.error("noo" + error);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchApi();
    console.log("render");
  }, [city]);

  return (
    <>
      <ToastContainer />
      <Navbar onSearch={handelClick} />

      {weatherD && air &&foreCastee &&(
        <div className="WeatherMain">
          <div style={{display: "flex", flexDirection: "column", width: "20%"}}>
            <WeatherData myData={weatherD} />
            <h1>Forecast</h1>
            <div style={{backgroundColor: "#4B5563", borderRadius: "1rem",color:"white"}}>
              <Forecast
                forecastData={foreCastee}
              
              />
          
            </div>
          </div>

          <Airweather airW={air} mainW={weatherD} />
        </div>
      )}
    </>
  );
}

export default App;
