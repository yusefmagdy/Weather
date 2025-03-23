import {
  Air,
  Compress,
  DeviceThermostat,
  InvertColors,
  LocalActivityRounded,
  LocalAirportOutlined,
  Visibility,
} from "@mui/icons-material";
import {Badge, Menu} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WeatherResluts from "./Resluts";


const Airweather = ({mainW, airW}) => {
  const {main, wind, visibility, sys} = mainW;
  const air = airW?.main?.aqi;
  const manu = mainW;

  const {co, no, no2, o3} = airW?.components || {};
  console.log("airW.comopnnets");
  console.log(manu);
  console.log(main);
  console.log(wind);

  const rednderRate = (air) => {
    switch (air) {
      case 1:
        return "Good";
      case 2:
        return "fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        "Unknown";
    }
  };

  return (
    // style={{height:"100%",display: "flex", flexDirection: "column", flex: "0.5", gap: "20px",width:"70%" }}

    <div
      style={{
        flex: "1",
        alignContent: "center",

        borderRadius: "0.5rem",
        padding: "30px",
        color: "white",
        backgroundColor: "#4B5563",
        display: "flex",
        flexDirection: "column",
      }}>
      <p
        style={{
          fontSize: "30px",
          display: "flex",
          textAlign: "start",
          gap: "20px",
        }}>
        {" "}
        Today`s Highlights{" "}
      </p>
      <div style={{display: "flex"}}>
        <div
          style={{
            width: "50%",
            backgroundColor: "#374151",
            borderRadius: "5px",
          }}>
          <div style={{}}>
            <p style={{fontSize: "35px", marginTop: "10px", padding: "10px"}}>
              Air Quality Index{" "}
              <Badge
                style={{
                  backgroundColor: "green",
                  fontSize: "20px",
                  marginLeft: "25%",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  padding: "5px",
                }}>
                {rednderRate(air)}
              </Badge>
            </p>
          </div>

          <Air
            style={{
              fontSize: "50px",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto ",
              padding: "20px",
              margin: "10px",
            }}>
            <div>
              <p style={{fontSize: "20px", fontWeight: "bold"}}>CO</p>
            </div>
            <div>
              <p style={{fontSize: "20px", fontWeight: "bold", gap: "20px"}}>
                NO
              </p>
            </div>
            <div>
              <p style={{fontSize: "20px", fontWeight: "bold", gap: "20px"}}>
                NO₂
              </p>
            </div>
            <div>
              <p style={{fontSize: "20px", fontWeight: "bold", gap: "20px"}}>
                O₃
              </p>
            </div>
            <div>
              <p style={{fontSize: "20px", fontWeight: "bold", gap: "20px"}}>
                {co}
              </p>
            </div>
            <div>
              <p style={{fontSize: "20px", fontWeight: "bold", gap: "20px"}}>
                {no}
              </p>
            </div>
            <div>
              <p style={{fontSize: "20px", fontWeight: "bold", gap: "20px"}}>
                {no2}
              </p>
            </div>
            <div>
              <p style={{fontSize: "20px", fontWeight: "bold", gap: "20px"}}>
                {o3}
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <div
          style={{
            width: "50%",
            backgroundColor: "#374151",
            borderRadius: "5px",
            padding: "10px",
            marginLeft: "30px",
            alignItems: "center",
          }}>
          <div style={{fontSize: "35px"}}>
            <p>Sunrise And Sunset</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}>
              <div>
                <WbSunnyIcon style={{fontSize: "30px", marginLeft: "30px"}} />
                <p style={{fontSize: "30px", marginLeft: "20px"}}>
                  {new Date(sys.sunrise * 1000).toLocaleTimeString()}
                </p>
              </div>
              <div>
                <NightsStayIcon
                  style={{fontSize: "30px", marginRight: "35px"}}
                />
                <p style={{fontSize: "30px", marginRight: "50px"}}>
                  {new Date(sys.sunset * 1000).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}

      <div style={{display: "flex", gap: "10px"}}>
        <WeatherResluts name={"humidity"} data={manu.main.humidity + "%"}>
          <InvertColors style={{fontSize: "30px", marginRight: "2%"}} />
        </WeatherResluts>
        <WeatherResluts name={"pressure"} data={manu.main.pressure + " hPa"}>
          <Compress style={{fontSize: "30px", marginRight: "2%"}} />
        </WeatherResluts>
        <WeatherResluts name={"visibility"} data={visibility + " Km"}>
          <Visibility style={{fontSize: "30px", marginRight: "2%",marginBottom:"5px"}} />
        </WeatherResluts>
        <WeatherResluts name={"Feels Like"} data={manu.main.feels_like + " C"}>
          <DeviceThermostat style={{fontSize: "30px", marginRight: "2%"}} />
        </WeatherResluts>
      </div>
    </div>
  );
};

export default Airweather;
