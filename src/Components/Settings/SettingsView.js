import React from 'react';
import { Link } from "react-router-component";

import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/feather/home';

import "./Settings.css";

function SettingsView(props) {
    console.log("rendering");
    return (
        <div id="settings">
            <Link href="/" className="settings-icon pull-right">
                <Icon icon={home} size={32} />
            </Link>
            <h1>Settings</h1>
            <br />
            {props.settingsKeys.map(settingsKey => (
                <div key={settingsKey} className={"block " + settingsKey}>
                    <h2>{props.settingsData[settingsKey].description}</h2>
                    <h3>{props.selectedOptions[settingsKey].option.description}</h3>
                    <p>{props.selectedOptions[settingsKey].option.note}</p>
                    <select onChange={event => props.handleSelect(settingsKey, event.target.value)}>
                        {props.settingsData[settingsKey].options.map(option => (
                            <option key={option.key} value={option.key}>{option.name}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
}

export default SettingsView;