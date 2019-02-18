import geolocator from "geolocator";

export default class LocationService {
  constructor() {
    geolocator.config({
      language: "en",
      google: {
        version: "3",
        key: process.env.REACT_APP_GOOGLE_API_KEY
      }
    });
  }

  getPosition() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }, reject, options);
    });
  }

  getLocation() {
    const options = {
      enableHighAccuracy: true,
      fallbackToIP: true,
      addressLookup: true
    };

    return new Promise((resolve, reject) => {
      geolocator.locate(options, (error, location) => {
        if (error) {
          reject(error);
          return;
        }

        resolve({
          city: location.address.city,
          country: location.address.country,
          coords: location.coords
        });
      });
    });
  }
}
