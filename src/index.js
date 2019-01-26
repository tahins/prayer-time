import React from "react";
import ReactDOM from "react-dom";
import adhan from "adhan";

import "./styles.css";
//https://cdn.dribbble.com/users/981797/screenshots/2743209/iman-time.jpg
//https://github.com/batoulapps/adhan-js

function App() {
  var date = new Date();
  var coordinates = new adhan.Coordinates(35.78056, -78.6389);
  var params = adhan.CalculationMethod.MuslimWorldLeague();
  params.madhab = adhan.Madhab.Hanafi;
  var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
  var formattedTime = adhan.Date.formattedTime;

  return (
    <div className="App">
      <h1>
        Fazr Time:
        {formattedTime(prayerTimes.fajr, -4)}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
