import React, { useContext } from 'react';
import { SettingsContext } from "../../Contexts/settings.context";
import SettingsView from "./SettingsView";

import defaultSettingsData from "./SettingsData.json";

function Settings() {
    let settingsKeys = Object.keys(defaultSettingsData);
    const settingsContext = useContext(SettingsContext);

    const selectionHandler = (settingsKey, selectedKey) => {
        let selectedOptions = { ...settingsContext.selectedOptions };
        selectedOptions[settingsKey] = {
            optionKey: selectedKey,
            option: settingsContext.getSelectedOption(settingsKey, selectedKey)
        };
        settingsContext.setSelectedOptions(selectedOptions);
    };

    return <SettingsView
        settingsData={defaultSettingsData}
        settingsKeys={settingsKeys}
        selectedOptions={settingsContext.selectedOptions}
        handleSelect={selectionHandler}
    />
}

export default Settings;

