import React, { useState, useContext } from "react";
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
import { SettingsContext } from "../../Contexts/settings.context";
import AppConfig from "../../AppConfig.json";

import "./PrayerTimeTable.css";

function PrayerTimeTable(props) {
  if (!props.latitude || !props.longitude) return null;

  const settingsContext = useContext(SettingsContext);
  const getUpdatedPrayerTimes = getPrayerTimesToDisplay.bind(this, props.latitude, props.longitude,
    settingsContext.selectedOptions.method.optionKey, settingsContext.selectedOptions.madhab.optionKey);
  const [prayerTimes, setPrayerTimes] = useState(
    getUpdatedPrayerTimes()
  );

  setupUpdatePrayerTimeInEveryMinute(getUpdatedPrayerTimes, setPrayerTimes);

  return (
    <ul id="prayerTimeTable">
      {prayerTimes.map((prayerTime, index) => (
        <PrayerTimeRow key={index} {...prayerTime} />
      ))}
    </ul>
  );
}

function setupUpdatePrayerTimeInEveryMinute(getUpdatedPrayerTimes, setPrayerTimes) {
  const now = new Date();
  const SECONDS_REMAINING_TILL_THIS_MINUTE = (60 - now.getSeconds()) * 1000;
  const ONE_SECOND = 60 * 1000;

  setTimeout(() => {
    setPrayerTimes(getUpdatedPrayerTimes());

    setInterval(() => {
      setPrayerTimes(getUpdatedPrayerTimes());
    }, ONE_SECOND);
  }, SECONDS_REMAINING_TILL_THIS_MINUTE);
}

function getPrayerTimesToDisplay(latitude, longitude, method, madhab) {
  const prayerTimeService = new PrayerTimeService(latitude, longitude, method, madhab);
  let prayerTimes = prayerTimeService.getPrayerTimes();
  let prayerTimesToDisplay = AppConfig.prayerTimesToShow.map(timeKey => {
    let prayerTime = prayerTimes[timeKey];
    prayerTime.icon = getPrayerTimeIcon(timeKey, 38);
    return prayerTimes[timeKey];
  });

  return prayerTimesToDisplay;
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
