import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import {Button} from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import "./navbar.css";

const Navbar = ({onSearch}) => {
  const [search, setSearch] = useState("");

  const handelClick = () => {
    if(search.trim())
        onSearch(search)
  };

  return (
    <>
      <nav className="navbar">
        <div className="weathericon">
          <FilterDramaIcon />
          <p className="weatherText">Weather</p>
        </div>
        <div className="search">
          <TextField
            style={{width: "30rem"}}
            placeholder="Search"
            variant="outlined"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button
            onClick={handelClick}
            variant="contained"
            style={{backgroundColor: "#4B5550", borderRadius: "6px"}}>
            Search
          </Button>
        </div>
        <div className="location">
          <GpsFixedIcon style={{display:"flex",marginLeft:"10px"}} />
          <p className="currentLocaionText">Current Location</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
