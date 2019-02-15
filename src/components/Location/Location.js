import React, { useState } from "react";
import LocationService from "./LocationService";

function Location() {
  const [location, setLocation] = useState(null);
  const locationService = new LocationService();

  if (!location) {
    locationService.getLocation().then(location => {
      setLocation(location.city + ", " + location.country);
    });
  }

  return <div id="location">{location}</div>;
}

export default Location;
