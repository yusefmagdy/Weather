import {AcUnit, CalendarMonthOutlined, CalendarViewMonthRounded, Cloud, LocationOn, WbSunny} from "@mui/icons-material";
import "./mainweather.css";
import moment from "moment/moment";
import Forecast from './forcast';
const WeatherData = ({myData}) => {
  const tempe = myData?.main?.temp || "N/A";
  const description =myData?.weather?.[0]?.main || "N?A"
const cityName=myData?.name ||"city NOt Available"
const countryName=myData?.sys?.country || " Country NOt Available"
const timeZone=moment().format('MMMM Do YYYY')



  const renderTemperture = () => {
    if (tempe > 15) return <WbSunny style={{color:"yellow" ,marginLeft:"20px", fontSize:"3rem"}} />;
    else if (tempe >10) return <AcUnit style={{color:"white" ,marginLeft:"20px", fontSize:"3rem"}} />;
    else return <Cloud style={{color:"gary" ,marginLeft:"20px", fontSize:"3rem"}} />;
  };

  return (<div style={{display:"flex ",flexDirection:"column"}}>
    <div className="parentDiv">
      <div className="input-title">Now</div>
      <div className="display-temp">
        {tempe}C{renderTemperture()}
        
      </div>
      <div className="description-c">{description}</div>

      <div className="calender">
        <div className="time-display">
            <CalendarMonthOutlined style={{fontSize:"30px",marginRight:"2%"}}/> 
            {timeZone}
            
             </div>
        <div className="location-city">
            <LocationOn style={{fontSize:"30px",marginRight:"2%"}}/>
            {cityName},{countryName}</div>

      </div>

     

    </div>
    {/* <h1>Forecast</h1>
    <div style={{backgroundColor:"gray",borderRadius:"1rem"}}> 
      <Forecast date={21+"AUg"} temp={13+"C"} description={"focase"} />
      <Forecast date={21+"AUg"} temp={13+"C"} description={"focase"} />
      <Forecast date={21+"AUg"} temp={13+"C"} description={"focase"} />
      <Forecast date={21+"AUg"} temp={13+"C"} description={"focase"} />

       </div> */}
    </div>
  );
};

export default WeatherData;
