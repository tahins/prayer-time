import React, { useState, useContext } from "react";
import LocationService from "../../Services/location.service";
import CoordsContext from "../../CoordsContext";
// import { Icon } from 'react-icons-kit';
// import { crosshair } from 'react-icons-kit/feather/crosshair';

function Location() {
  const [location, setLocation] = useState(null);
  const coordsContext = useContext(CoordsContext);
  const locationService = new LocationService();

  if (!coordsContext.coords.latitude || !coordsContext.coords.longitude) {
    locationService.getPosition()
      .then(coords => {
        coordsContext.setCoords(coords);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  if (!location) {
    locationService.getLocation().then(location => {
      setLocation(location.city + ", " + location.country);
      coordsContext.setCoords(location.coords);
    })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return <div id="location">
    {location}

    {/* <Icon icon={crosshair} size={32} /> */}
  </div>;
}

export default Location;
