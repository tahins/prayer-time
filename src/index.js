import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import adhan from "adhan";
import Calendar from "./components/Calendar/Calendar.js";
import Location from "./components/Location/Location.js";
import PrayerTimeTable from "./components/PrayerTimeTable/PrayerTimeTable.js";
import CoordsContext from "./CoordsContext";

import "./styles.css";
//https://cdn.dribbble.com/users/981797/screenshots/2743209/iman-time.jpg
//https://github.com/batoulapps/adhan-js
//https://najens.github.io/weather-icons-react/

function App() {
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0
  });

  return (
    <CoordsContext.Provider value={{ coords, setCoords }}>
      <div className="App">
        <Calendar />
        <Location />
        <br />
        <br />
        <PrayerTimeTable />
      </div>
    </CoordsContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
