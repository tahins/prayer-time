import Adhan from "adhan";

export default class PrayerTime {
  constructor(latitude, longitude) {
    this.date = new Date();
    this.coordinates = new Adhan.Coordinates(latitude, longitude);
    this.params = this._getDefaultParams();

    this.prayerTimes = new Adhan.PrayerTimes(
      this.coordinates,
      this.date,
      this.params
    );
  }

  _getDefaultParams() {
    let params = Adhan.CalculationMethod.UmmAlQura();
    params.madhab = Adhan.Madhab.Shafi;
    return params;
  }

  getPrayerTimes(date = new Date(), hourMode) {
    const UTCTimezoneOffsetInHours = date.getTimezoneOffset() / -60;
    const formattedTime = Adhan.Date.formattedTime;
    const currentTimeIndex = this.prayerTimes.currentPrayer();
    // const todayIshaTime = this.prayerTimes.isha;
    // const tomorrowFajrTime = this.prayerTimes.fajr;
    // tomorrowFajrTime.setDate(tomorrowFajrTime.getDate() + 1);
    // const tillMidnight = (tomorrowFajrTime - todayIshaTime) * 0.5;
    // const midnight = new Date(todayIshaTime.getTime() + tillMidnight);
    // console.log(midnight);
    // const nextTimeIndex = this.prayerTimes.nextPrayer();
    // console.log(this.prayerTimes);
    // console.log(this.prayerTimes.timeForPrayer());
    // console.log(currentTimeIndex);
    // console.log(nextTimeIndex);
    const timeKeys = [
      "fajr",
      "sunrise",
      "dhuhr",
      "asr",
      "maghrib",
      "isha",
      "midnight"
    ];

    let prayerTimes = {
      fajr: {
        name: "Fajr",
        time: formattedTime(
          this.prayerTimes.fajr,
          UTCTimezoneOffsetInHours,
          hourMode
        )
      },
      sunrise: {
        name: "Sunrise",
        time: formattedTime(
          this.prayerTimes.sunrise,
          UTCTimezoneOffsetInHours,
          hourMode
        )
      },
      dhuhr: {
        name: "Dhuhr",
        time: formattedTime(
          this.prayerTimes.dhuhr,
          UTCTimezoneOffsetInHours,
          hourMode
        )
      },
      asr: {
        name: "Asr",
        time: formattedTime(
          this.prayerTimes.asr,
          UTCTimezoneOffsetInHours,
          hourMode
        )
      },
      maghrib: {
        name: "Maghrib",
        time: formattedTime(
          this.prayerTimes.maghrib,
          UTCTimezoneOffsetInHours,
          hourMode
        )
      },
      isha: {
        name: "Isha",
        time: formattedTime(
          this.prayerTimes.isha,
          UTCTimezoneOffsetInHours,
          hourMode
        )
      },
      midnight: {
        name: "Midnight",
        time: ""
      }
    };

    prayerTimes[timeKeys[currentTimeIndex]].isCurrent = true;

    return prayerTimes;
  }
}
