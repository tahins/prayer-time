import React from "react";

function PrayerTimeRow(props) {
  // console.log(props);
  return (
    <li
      id="prayerTimeRow"
      className={props.isCurrent ? "current-prayer-time" : ""}
    >
      <div className="prayer-icon">{props.icon}</div>
      <div className="prayer-name">{props.name}</div>
      <div className="prayer-time">{props.formattedTime}</div>
      {props.isCurrent ? (
        <div className="prayer-time-remaining">
          Time until {props.next}: {props.timeUntilNextPrayerInText}
        </div>
      ) : null}
    </li>
  );
}

export default PrayerTimeRow;
