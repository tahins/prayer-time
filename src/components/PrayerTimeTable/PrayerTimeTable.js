import React, { useContext } from "react";
import PrayerTimeRow from "./PrayerTimeRow.js";
import PrayerTimeService from "../../Services/prayertime.service.js";
import {
  WiDayHaze,
  WiDayCloudy,
  WiDaySunny,
  WiDayCloudyHigh,
  WiNightCloudy,
  WiNightAltPartlyCloudy,
  WiNightClear
} from "weather-icons-react";
import CoordsContext from "../../CoordsContext";
import Config from "/config.json";

import "./PrayerTimeTable.css";

function PrayerTimeTable() {
  const coordsContext = useContext(CoordsContext);

  const prayerTimeService = new PrayerTimeService(
    coordsContext.coords.latitude,
    coordsContext.coords.longitude
  );
  let prayerTimes = prayerTimeService.getPrayerTimes();
  let prayerTimesToShow = Config.prayerTimesToShow.map((timeKey, index) => {
    let prayerTime = prayerTimes[timeKey];
    prayerTime.icon = getPrayerTimeIcon(timeKey, 38);
    return prayerTimes[timeKey];
  });

  return (
    <ul id="prayerTimeTable">
      {prayerTimesToShow.map((prayerTime, index) => (
        <PrayerTimeRow key={index} {...prayerTime} />
      ))}
    </ul>
  );
}

function getPrayerTimeIcon(prayerTimeKey, size) {
  switch (prayerTimeKey) {
    case "fajr":
      return <WiDayHaze size={size} />;
    case "sunrise":
      return <WiDayCloudy size={size} />;
    case "dhuhr":
      return <WiDaySunny size={size} />;
    case "asr":
      return <WiDayCloudyHigh size={size} />;
    case "maghrib":
      return <WiNightCloudy size={size} />;
    case "isha":
      return <WiNightAltPartlyCloudy size={size} />;
    case "midnight":
      return <WiNightClear size={size} />;
    default:
      return <WiDaySunny size={size} />;
  }
}

export default PrayerTimeTable;
