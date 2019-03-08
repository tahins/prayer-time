import React, { useState } from "react";
import LocalStorageService from "../Services/localstorage.service";

const PlaceContext = React.createContext();

function PlaceContextProvider(props) {
    let initialPlace = LocalStorageService.getPlace();
    if (!initialPlace) {
        initialPlace = {
            city: null,
            country: null
        }
    }

    let [place, setPlaceInState] = useState(initialPlace);

    return <PlaceContext.Provider
        value={{
            place,
            setPlace: place => {
                LocalStorageService.setPlace(place);
                setPlaceInState(place);
            },
            isPlaceSet: () => !(!place.city && !place.country),
            getPlaceName: () => place.city + ", " + place.country
        }}>
        {props.children}
    </PlaceContext.Provider>
}

export { PlaceContextProvider, PlaceContext };
