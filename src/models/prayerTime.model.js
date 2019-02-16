export default class PrayerTime {
  constructor(name, time, next, isCurrent = false, timeUntilNextPrayer = null) {
    this.name = name;
    this.time = time;
    this.next = next;
    this.isCurrent = isCurrent;
    this.timeUntilNextPrayer = timeUntilNextPrayer;
  }

  setCurrent(status) {
    this.isCurrent = status;
  }

  setTimeUntilNextPrayer(timeUntilNextPrayer) {
    this.timeUntilNextPrayer = timeUntilNextPrayer;
  }

  getTimeUntilNextPrayer() {
    return this.timeUntilNextPrayer;
  }
}
