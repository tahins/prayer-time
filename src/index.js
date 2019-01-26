import React from "react";
import ReactDOM from "react-dom";
import adhan from "adhan";
import Calendar from "./components/Calendar/Calendar.js";
import Location from "./components/Location/Location.js";
import PrayerTimeTable from "./components/PrayerTimeTable/PrayerTimeTable.js";

import "./styles.css";
//https://cdn.dribbble.com/users/981797/screenshots/2743209/iman-time.jpg
//https://github.com/batoulapps/adhan-js
//https://najens.github.io/weather-icons-react/

function App() {
  // var date = new Date();
  // var coordinates = new adhan.Coordinates(35.78056, -78.6389);
  // var params = adhan.CalculationMethod.MuslimWorldLeague();
  // params.madhab = adhan.Madhab.Hanafi;
  // var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
  // var formattedTime = adhan.Date.formattedTime;
  // var prayerTime = formattedTime(prayerTimes.fajr, -4);

  return (
    <div className="App">
      <Calendar />
      <Location />
      <br />
      <br />
      <PrayerTimeTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
