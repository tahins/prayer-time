import Adhan from "adhan";
import moment from "moment";
import { getSunrise, getSunset } from "sunrise-sunset-js";
import UtilService from "../Services/util.service";
import PrayerTime from "../Models/prayerTime.model";

export default class PrayerTimeService {
  constructor(latitude, longitude) {
    this._date = new Date();
    this._coordinates = new Adhan.Coordinates(latitude, longitude);
    this._params = this._getDefaultParams();

    this._prayerTimes = new Adhan.PrayerTimes(
      this._coordinates,
      this._date,
      this._params
    );

    this._prayerTimes["midnight"] = this._getMidnight();

    // console.log(this._prayerTimes);

    this._timeKeys = [
      "fajr",
      "sunrise",
      "dhuhr",
      "asr",
      "maghrib",
      "isha",
      "midnight"
    ];
  }

  getPrayerTimes(date = new Date(), hourMode) {
    const UTCTimezoneOffsetInHours = date.getTimezoneOffset() / -60;
    const formattedTime = Adhan.Date.formattedTime;
    const currentTimeIndex = this._prayerTimes.currentPrayer();
    const nextTimeIndex = this._prayerTimes.nextPrayer();

    let prayerTimes = {};
    this._timeKeys.forEach((key, index) => {
      let name = UtilService.capitalize(key);
      let time = this._prayerTimes[key];
      let nextIndex = index + 1;
      nextIndex = nextIndex !== this._timeKeys.length ? nextIndex : 0;
      let nextName = UtilService.capitalize(this._timeKeys[nextIndex]);

      if (key !== "midnight") {
        time = formattedTime(
          this._prayerTimes[key],
          UTCTimezoneOffsetInHours,
          hourMode
        );
      }

      prayerTimes[key] = new PrayerTime(name, time, nextName);
    });

    const currentTimeKey = this._timeKeys[currentTimeIndex];
    const timeUntilNextPrayer = this._getTimeUntilNextPrayer(nextTimeIndex);
    prayerTimes[currentTimeKey].setCurrent(true);
    prayerTimes[currentTimeKey].setTimeUntilNextPrayer(timeUntilNextPrayer);

    return prayerTimes;
  }

  _getDefaultParams() {
    let params = Adhan.CalculationMethod.UmmAlQura();
    params.madhab = Adhan.Madhab.Shafi;
    return params;
  }

  _getMidnight() {
    let sunset = moment(
      getSunset(this._coordinates.latitude, this._coordinates.longitude)
    ).subtract(this._date.getTimezoneOffset(), "minutes");
    sunset =
      sunset.second() || sunset.millisecond()
        ? sunset.add(1, "minute").startOf("minute")
        : sunset.startOf("minute");
    sunset = sunset.toDate();

    let fajr = this._prayerTimes["fajr"];
    let midnightOffset = (fajr.getTime() - sunset.getTime()) / 2;
    let midnight = sunset.getTime() + midnightOffset;

    // console.log(sunset, fajr, new Date(midnight));

    return moment(midnight).format("h:m A");
  }

  _getTimeUntilNextPrayer(nextTimeIndex) {
    let currentTime = moment(new Date());
    let nextPrayerTime = moment(
      this._prayerTimes[this._timeKeys[nextTimeIndex]]
    );

    let timeDifference = nextPrayerTime.diff(currentTime, "minutes");
    let timeDifferenceInHours = parseInt(timeDifference / 60);
    let timeDifferenceInMinutes = timeDifference % 60;
    let timeUntilNextPrayer = [];
    if (timeDifferenceInHours > 0)
      timeUntilNextPrayer.push(timeDifferenceInHours + " hours");
    if (timeDifferenceInMinutes > 0)
      timeUntilNextPrayer.push(timeDifferenceInMinutes + " minutes");

    return timeUntilNextPrayer.join(" ");
  }
}
