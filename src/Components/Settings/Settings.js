import React, { useState } from 'react';
import SettingsView from "./SettingsView";

import defaultSettingsData from "./SettingsData.json";

function Settings() {
    let settingsKeys = Object.keys(defaultSettingsData);
    let defaultSelectedOptions = {};
    settingsKeys.forEach(settingsKey => {
        let optionKey = defaultSettingsData[settingsKey].defaultOptionKey;
        let option = getSelectedOption(settingsKey, optionKey);

        defaultSelectedOptions[settingsKey] = { optionKey, option };
    });
    console.log(defaultSelectedOptions);

    let [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions);

    const selectionHandler = (settingsKey, selectedKey) => {
        selectedOptions[settingsKey] = {
            optionKey: selectedKey,
            option: getSelectedOption(settingsKey, selectedKey)
        };
        console.log(selectedOptions);
        setSelectedOptions(selectedOptions);
    };

    return <SettingsView
        settingsData={defaultSettingsData}
        settingsKeys={settingsKeys}
        selectedOptions={selectedOptions}
        handleSelect={selectionHandler}
    />
}

export default Settings;

const getSelectedOption = (settingsKey, selectedOptionKey) => defaultSettingsData[settingsKey].options.filter(
    option => option.key === selectedOptionKey
)[0];
