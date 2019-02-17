import React, { useState, useContext } from "react";
import LocationService from "../../Services/location.service";
import CoordsContext from "../../CoordsContext";

function Location() {
  const [location, setLocation] = useState(null);
  const coordsContext = useContext(CoordsContext);
  const locationService = new LocationService();

  if (!location) {
    locationService.getLocation().then(location => {
      coordsContext.setCoords(location.coords);
      setLocation(location.city + ", " + location.country);
    });
  }

  return <div id="location">{location}</div>;
}

export default Location;
