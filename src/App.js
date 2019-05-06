import React, { useContext } from "react";
import { Locations, Location, NotFound } from 'react-router-component';
import PrayerTime from "./Components/PrayerTime/PrayerTime";
import LocationPermission from "./Components/LocationPermission/LocationPermission";
import Settings from "./Components/Settings/Settings";
import UtilService from "./Services/util.service";
import { PositionContextProvider, PositionContext } from "./Contexts/position.context";
import { PlaceContextProvider } from "./Contexts/place.context";
import { SettingsContextProvider } from "./Contexts/settings.context";

import "./App.css";

function App() {
  return (
    <PositionContextProvider>
      <PlaceContextProvider>
        <SettingsContextProvider>
          <AppRouter />
        </SettingsContextProvider>
      </PlaceContextProvider>
    </PositionContextProvider>
  );
}

export default App;

function AppRouter() {
  const routerRef = React.createRef();
  const positionContext = useContext(PositionContext);
  const isCoordsSet = positionContext.isCoordsSet();
  const baseUrl = UtilService.getBaseUrl();

  return (
    <div className="App">
      <Locations ref={routerRef}>
        <Location path={baseUrl + "/"} handler={isCoordsSet ? PrayerTime : LocationPermission} />
        <Location path={baseUrl + "/settings"} handler={Settings} />
        <NotFound handler={LocationPermission} />
      </Locations>
    </div>
  );
}
