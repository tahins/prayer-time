import React from "react";
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
import AppConfig from "../../AppConfig.json";

import "./PrayerTimeTable.css";

function PrayerTimeTable(props) {
  if (!props.latitude || !props.longitude) return null;

  let prayerTimes = getUpdatedPrayerTimes(props.latitude, props.longitude);

  // setInterval(() => {
  //   setPrayerTimes(getUpdatedPrayerTimes(
  //     coordsContext.coords.latitude,
  //     coordsContext.coords.longitude
  //   ));
  //   console.log(prayerTimes);
  // }, 100000);

  return (
    <ul id="prayerTimeTable">
      {prayerTimes.map((prayerTime, index) => (
        <PrayerTimeRow key={index} {...prayerTime} />
      ))}
    </ul>
  );
}

function getUpdatedPrayerTimes(latitude, longitude) {
  const prayerTimeService = new PrayerTimeService(latitude, longitude);
  let prayerTimes = prayerTimeService.getPrayerTimes();
  let prayerTimesToShow = AppConfig.prayerTimesToShow.map((timeKey, index) => {
    let prayerTime = prayerTimes[timeKey];
    prayerTime.icon = getPrayerTimeIcon(timeKey, 38);
    return prayerTimes[timeKey];
  });

  return prayerTimesToShow;
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
