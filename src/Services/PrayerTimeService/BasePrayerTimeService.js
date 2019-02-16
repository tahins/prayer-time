class BasePrayerTimeService {
    constructor(location, duration, date, daylightSaving, method) {
        this.location = location;
        this.duration = duration;
        this.date = date;
        this.daylightSaving = daylightSaving;
        this.method = method;
    }

    getTime() {

    }
}

// var prayerTime = new BasePrayerTime(location, duration, date, daylightSaving, method)
// prayerTime.getTime();