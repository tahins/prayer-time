import React, { useContext } from "react";
import { PositionContext } from "../../Contexts/position.context";
import { PlaceContext } from "../../Contexts/place.context";
import LocationService from "../../Services/location.service";
import LocationPermissionView from "./LocationPermissionView";

function LocationPermission() {
  const locationService = new LocationService();
  const positionContext = useContext(PositionContext);
  const placeContext = useContext(PlaceContext);
  const getUserLocationAndPlace = getUserLocationAndPlaceHandler.bind(
    this, locationService, positionContext, placeContext
  );

  return (
    <LocationPermissionView
      getUserLocationAndPlace={getUserLocationAndPlace} />
  );
}

export default LocationPermission;

const getUserLocationAndPlaceHandler = async (locationService, positionContext, placeContext) => {
  let coords = await locationService.getPosition();
  positionContext.setCoords(coords);
  getUserPlaceHandler(locationService, placeContext);
};

const getUserPlaceHandler = async (locationService, placeContext) => {
  let place = await locationService.getPlace();
  placeContext.setPlace(place);
};
