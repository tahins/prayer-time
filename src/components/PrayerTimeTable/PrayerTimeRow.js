import React from "react";

function PrayerTimeRow(props) {
  return (
    <li
      id="prayerTimeRow"
      className={props.isCurrent ? "current-prayer-time" : ""}
    >
      <div className="prayer-icon">{props.icon}</div>
      <div className="prayer-name">{props.name}</div>
      <div className="prayer-time">{props.time}</div>
      {props.isCurrent ? (
        <div className="prayer-time-remaining">
          Time until next prayer: {props.timeUntilNextPrayer}
        </div>
      ) : null}
    </li>
  );
}

export default PrayerTimeRow;
