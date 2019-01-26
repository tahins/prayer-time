import React from "react";
import PrayerTimeRow from "./PrayerTimeRow.js";
import "./PrayerTimeTable.css";

function PrayerTimeTable() {
  return (
    <ul id="prayerTimeTable">
      <PrayerTimeRow />
      <PrayerTimeRow currentPrayerTime={true} />
      <PrayerTimeRow />
      <PrayerTimeRow />
    </ul>
  );
}

export default PrayerTimeTable;
