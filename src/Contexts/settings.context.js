import React, { useState } from "react";
import LocalStorageService from "../Services/localstorage.service";

import defaultSettingsData from "../Components/Settings/SettingsData.json";
const SettingsContext = React.createContext();

function SettingsContextProvider(props) {
    let settingsKeys = Object.keys(defaultSettingsData);
    let defaultSelectedOptions = LocalStorageService.getSelectedSettingsOptions();

    const getSelectedOption = (settingsKey, selectedOptionKey) => defaultSettingsData[settingsKey].options.filter(
        option => option.key === selectedOptionKey
    )[0];

    if (!defaultSelectedOptions) {
        defaultSelectedOptions = {};
        settingsKeys.forEach(settingsKey => {
            let optionKey = defaultSettingsData[settingsKey].defaultOptionKey;
            let option = getSelectedOption(settingsKey, optionKey);

            defaultSelectedOptions[settingsKey] = { optionKey, option };
        });
    }

    let [selectedOptions, setSelectedOptionsInState] = useState(defaultSelectedOptions);

    return <SettingsContext.Provider
        value={{
            selectedOptions,
            setSelectedOptions: selectedOptions => {
                LocalStorageService.setSelectedSettingsOptions(selectedOptions);
                setSelectedOptionsInState(selectedOptions);
            },
            getSelectedOption
        }}>
        {props.children}
    </SettingsContext.Provider>
}

export { SettingsContextProvider, SettingsContext };
