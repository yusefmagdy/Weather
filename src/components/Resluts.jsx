import React from "react";
const WeatherResluts = ({name, data, children}) => {
  return (
    <div
      style={{
        backgroundColor: "#374151",
        width: "22%",
        height: "auto",
        padding: "15px",
        marginTop: "10px",
        borderRadius: "1rem",
      }}> 
      <p style={{fontSize: "25px", marginTop: "5px"}}>{name}</p>
      <div>
      <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
      {children}
        <p style={{fontSize: "30px", marginTop: "5px",marginBottom:"5px"}}> {data}</p>
      
       </div> 
      </div>
    </div>
  );
};

export default WeatherResluts;
