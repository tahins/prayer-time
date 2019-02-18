import React, { useState } from "react";
import Calendar from "./Components/Calendar/Calendar.js";
import Location from "./Components/Location/Location.js";
import PrayerTimeTable from "./Components/PrayerTimeTable/PrayerTimeTable.js";
import CoordsContext from "./CoordsContext";

import "./App.css";

function App() {
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null
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

export default App;
