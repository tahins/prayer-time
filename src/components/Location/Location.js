import React, { useState, useContext } from "react";
import LocationService from "../../Services/location.service";
import CoordsContext from "../../CoordsContext";
import LocationView from "./LocationView";
import LocalStorageService from "../../Services/localstorage.service";

function Location() {
  let locationName = LocalStorageService.getLocationName();
  const [location, setLocation] = useState(locationName);
  const locationService = new LocationService();
  const coordsContext = useContext(CoordsContext);
  const isPositionSet = coordsContext.isPositionSet(coordsContext.coords);

  const getUserLocation = getUserLocationHandler.bind(this, locationService, coordsContext.setCoords, setLocation);

  return <LocationView
    coords={coordsContext.coords}
    isPositionSet={isPositionSet}
    location={location}
    getUserLocation={getUserLocation}
  />;
}

const getUserLocationHandler = (locationService, setCoords, setLocation) => {
  locationService.getPosition()
    .then(coords => {
      setCoords(coords);
      LocalStorageService.setPosition(coords);

      getUserCityCountryName(locationService, setLocation);
    })
    .catch(err => {
      console.error(err.message);
    });
}

const getUserCityCountryName = (locationService, setLocation) => {
  locationService.getLocation()
    .then(location => {
      let cityCountryName = location.city + ", " + location.country;
      setLocation(cityCountryName);
      LocalStorageService.setLocationName(cityCountryName);
    })
    .catch((err) => {
      console.error(err.message);
    });
}

export default Location;
