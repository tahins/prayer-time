export default class PrayerTime {
  constructor(name, time, formattedTime, next, isCurrent = false,
    timeUntilNextPrayerInMinutes = null, timeUntilNextPrayerInText = null) {

    this.name = name;
    this.time = time;
    this.formattedTime = formattedTime;
    this.next = next;
    this.isCurrent = isCurrent;
    this.timeUntilNextPrayerInText = timeUntilNextPrayerInText;
    this.timeUntilNextPrayerInMinutes = timeUntilNextPrayerInMinutes;
  }

  setCurrent(status) {
    this.isCurrent = status;
  }

  setTimeUntilNextPrayerInText(timeUntilNextPrayerInText) {
    this.timeUntilNextPrayerInText = timeUntilNextPrayerInText;
  }

  setTimeUntilNextPrayerInMinutes(timeUntilNextPrayerInMinutes) {
    this.timeUntilNextPrayerInMinutes = timeUntilNextPrayerInMinutes;
  }

  getTimeUntilNextPrayer() {
    return this.timeUntilNextPrayer;
  }
}
