import React from "react";
import PrayerTimeRow from "./PrayerTimeRow.js";
import PrayerTime from "../../services/prayertime.service.js";
import {
  WiDayHaze,
  WiDayCloudy,
  WiDaySunny,
  WiDayCloudyHigh,
  WiNightCloudy,
  WiNightAltPartlyCloudy,
  WiNightClear
} from "weather-icons-react";
import Config from "/config.json";
import "./PrayerTimeTable.css";

function PrayerTimeTable() {
  const prayerTime = new PrayerTime(23.777176, 90.399452);
  let prayerTimes = prayerTime.getPrayerTimes();
  let prayerTimesToShow = Config.prayerTimesToShow.map(timeKey => {
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
