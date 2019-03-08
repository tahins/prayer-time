import AppConfig from "../AppConfig";

export default class LocalStorageService {
    static setPosition(position) {
        return LocalStorageService.set(AppConfig.storageKeys.position, position);
    }
    static getPosition() {
        return LocalStorageService.get(AppConfig.storageKeys.position);
    }

    static setPlace(Place) {
        return LocalStorageService.set(AppConfig.storageKeys.place, Place);
    }
    static getPlace() {
        return LocalStorageService.get(AppConfig.storageKeys.place);
    }

    static setSettings(settings) {
        return LocalStorageService.set(AppConfig.storageKeys.settings, settings);
    }
    static getSettings() {
        return LocalStorageService.get(AppConfig.storageKeys.settings);
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