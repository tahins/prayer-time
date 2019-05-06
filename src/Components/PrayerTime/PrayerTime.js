import React, { useContext } from "react";
import { Link } from "react-router-component";
import moment from "moment";
import HijrahDate from "hijrah-date";
import PrayerTimeTable from "../PrayerTimeTable/PrayerTimeTable";
import UtilService from "../../Services/util.service";
import { PositionContext } from "../../Contexts/position.context";
import { PlaceContext } from "../../Contexts/place.context";

import { Icon } from 'react-icons-kit';
import { settings } from 'react-icons-kit/feather/settings';
import "./PrayerTime.css";

function PrayerTime() {
  const positionContext = useContext(PositionContext);
  const coords = positionContext.coords;
  const settingsUrl = UtilService.getBaseUrl() + "/settings";

  return (
    <div id="prayerTime">
      <SettingsIcon settingsUrl={settingsUrl} />
      <Calendar />
      <Place />
      <br />
      <PrayerTimeTable latitude={coords.latitude} longitude={coords.longitude} />
    </div>
  );
}

export default PrayerTime;

const SettingsIcon = props => (
  <Link href={props.settingsUrl} className="settings-icon pull-right">
    <Icon icon={settings} size={32} />
  </Link>
);

const Calendar = () => {
  let hijrahDate = new HijrahDate(new Date());
  const formattedHijriDate = hijrahDate.format("d MMMM yyyy");
  const formattedDate = moment(new Date()).format("DD MMM YYYY");

  return (
    <div id="calendar">
      {formattedHijriDate} / {formattedDate}
    </div>
  );
}

const Place = () => {
  const placeContext = useContext(PlaceContext);
  const placeName = placeContext.isPlaceSet() ? placeContext.getPlaceName() : "";

  return (
    <div id="location">
      {placeName}
    </div>
  );
}
