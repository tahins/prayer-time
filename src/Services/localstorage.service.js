import AppConfig from "../AppConfig";

export default class LocalStorageService {
    static setPosition(position) {
        return LocalStorageService.set(AppConfig.storageKeys.position, position);
    }

    static getPosition() {
        return LocalStorageService.get(AppConfig.storageKeys.position);
    }

    static setLocationName(locationName) {
        return LocalStorageService.set(AppConfig.storageKeys.locationName, locationName);
    }

    static getLocationName() {
        return LocalStorageService.get(AppConfig.storageKeys.locationName);
    }

    static set(key, value) {
        if (typeof value === "object") value = JSON.stringify(value);
        key = LocalStorageService.getKey(key);
        window.localStorage.setItem(key, value);
        return value;
    }
    static get = key => {
        key = LocalStorageService.getKey(key);
        let value = window.localStorage.getItem(key);
        try {
            value = JSON.parse(value);
        } catch (error) { }

        return value;
    }
    static getKey = key => AppConfig.storagePrefix + "." + key;
}