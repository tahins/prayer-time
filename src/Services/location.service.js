import geolocator from "geolocator";

export default class LocationService {
  constructor() {
    geolocator.config({
      language: "en",
      google: {
        version: "3",
        key: "AIzaSyAWhJ6BX_6L3RlmW95mqD6mYsmhxlCwEWo"
      }
    });
  }

  getLocation() {
    var options = {
      enableHighAccuracy: true,
      fallbackToIP: true,
      addressLookup: true
    };

    return new Promise((resolve, reject) => {
      geolocator.locate(options, (error, location) => {
        if (error) reject(error);
        resolve({
          city: location.address.city,
          country: location.address.country,
          coords: location.coords
        });
      });
    });
  }
}
