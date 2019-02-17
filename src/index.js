import React, { useState } from "react";
import ReactDOM from "react-dom";
import Calendar from "./Components/Calendar/Calendar.js";
import Location from "./Components/Location/Location.js";
import PrayerTimeTable from "./Components/PrayerTimeTable/PrayerTimeTable.js";
import CoordsContext from "./CoordsContext";

import * as serviceWorker from './serviceWorker';

import "./styles.css";

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
