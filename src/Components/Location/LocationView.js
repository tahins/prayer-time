import React from "react";
import { Icon } from 'react-icons-kit';
import { crosshair } from 'react-icons-kit/feather/crosshair';

import "./Location.css";

function LocationView(props) {
    if (props.isPositionSet) {
        return <div id="location">
            {props.location}

            <button className="fade small update-location" onClick={props.getUserLocation}>
                <Icon icon={crosshair} size={12} />
                Update
            </button>
        </div>;
    }

    return (
        <div id="noLocation">
            <p><strong>Assalamu'alaikum</strong>,</p>
            <p>We cannot show you prayer times without knowing where you are.</p>
            <br />
            <button className="primary large shadow" onClick={props.getUserLocation}>
                <Icon icon={crosshair} size={16} />
                Share my location
            </button>
        </div>
    );
}

export default LocationView;

