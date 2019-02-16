import React, { useState } from "react";
import ReactDOM from "react-dom";
import Calendar from "./components/Calendar/Calendar.js";
import Location from "./components/Location/Location.js";
import PrayerTimeTable from "./components/PrayerTimeTable/PrayerTimeTable.js";
import CoordsContext from "./CoordsContext";

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
