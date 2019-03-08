import React, { useState } from "react";
import LocalStorageService from "../Services/localstorage.service";

const PositionContext = React.createContext();

function PositionContextProvider(props) {
    let initialCoords = LocalStorageService.getPosition();
    if (!initialCoords) {
        initialCoords = {
            latitude: null,
            longitude: null
        }
    }

    let [coords, setCoordsInState] = useState(initialCoords);

    return <PositionContext.Provider
        value={{
            coords,
            setCoords: coords => {
                LocalStorageService.setPosition(coords);
                setCoordsInState(coords);
            },
            isCoordsSet: () => !(!coords.latitude && !coords.longitude)
        }}>
        {props.children}
    </PositionContext.Provider>
}

export { PositionContextProvider, PositionContext };
