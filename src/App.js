import React, { useState } from "react";
import Calendar from "./Components/Calendar/Calendar";
import Location from "./Components/Location/Location";
import PrayerTimeTable from "./Components/PrayerTimeTable/PrayerTimeTable";
import LocalStorageService from "./Services/localstorage.service";
import CoordsContext from "./CoordsContext";

import "./App.css";

function App() {
  let initialPosition = LocalStorageService.getPosition();

  if (!isPositionSet(initialPosition)) {
    initialPosition = {
      latitude: null,
      longitude: null
    }
  }

  const [coords, setCoords] = useState(initialPosition);

  return (
    <CoordsContext.Provider value={{ coords, setCoords, isPositionSet }}>
      <div className="App">
        <Calendar />
        <Location />
        <br />
        <PrayerTimeTable latitude={coords.latitude} longitude={coords.longitude} />
      </div>
    </CoordsContext.Provider>
  );
}

const isPositionSet = position => !(!position || !position.latitude || !position.longitude)

export default App;
