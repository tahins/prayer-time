import React from "react";
import { WiDaySunny } from "weather-icons-react";

function PrayerTimeRow(props) {
  return (
    <li
      id="prayerTimeRow"
      className={props.currentPrayerTime ? "current-prayer-time" : ""}
    >
      <div className="prayer-icon">
        <WiDaySunny size={38} />
      </div>
      <div className="prayer-name">Fajr</div>
      <div className="prayer-time">05:45 am</div>
      {props.currentPrayerTime ? (
        <div className="prayer-time-remaining">
          Time until next prayer: 1 hour 3 minutes
        </div>
      ) : null}
    </li>
  );
}

export default PrayerTimeRow;
