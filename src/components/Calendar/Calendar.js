import React from "react";
import moment from "moment";
import HijrahDate from "hijrah-date";

function Calendar() {
  let hijrahDate = new HijrahDate(new Date());
  const formattedHijriDate = hijrahDate.format("d MMMM yyyy");
  const formattedDate = moment(new Date()).format("DD MMM YYYY");

  return (
    <div id="calendar">
      {formattedHijriDate} / {formattedDate}
    </div>
  );
}

export default Calendar;
