"use strict";
var isLeap = function (year) {
    var yr = (typeof year === 'string') ? parseInt(year) : year;
    if (((yr % 4 === 0) && (yr % 100 !== 0)) || (yr % 400 === 0))
        return true;
    return false;
};
var daysPerMonth = {
    jan: 31,
    january: 31,
    feb: { common: 28, leap: 29 },
    february: { common: 28, leap: 29 },
    mar: 31,
    march: 31,
    apr: 30,
    april: 30,
    may: 31,
    jun: 30,
    june: 30,
    jul: 31,
    july: 31,
    aug: 31,
    august: 31,
    sep: 30,
    sept: 30,
    september: 30,
    oct: 31,
    october: 31,
    nov: 30,
    november: 30,
    dec: 31,
    december: 31,
};
exports.datetime = {
    //Function to detect leap years
    isLeap: isLeap,
    // Microseconds per millisecond
    microsecondsPerMillisecond: 1000,
    microsecondsPerMs: 1000,
    usPerMs: 1000,
    usecondsPerMs: 1000,
    usPerMillisecond: 1000,
    usecondPerMillisecond: 1000,
    usecondsPerMillisecond: 1000,
    μPerMs: 1000,
    μsPerMs: 1000,
    μsecondsPerMs: 1000,
    μPerMillisecond: 1000,
    μsecondPerMillisecond: 1000,
    μsPerMillisecond: 1000,
    μsecondsPerMillisecond: 1000,
    // Milliseconds per second
    msPerSec: 1000,
    millisecondsPerSecond: 1000,
    msPerSecond: 1000,
    msPerSeconds: 1000,
    millisecondsPerSec: 1000,
    // Milliseconds per minute
    msPerMinute: 60000,
    millisecondsPerMinute: 60000,
    msPerMin: 60000,
    millisecondsPerMin: 60000,
    // Milliseconds per hour
    msPerHour: 3600000,
    millisecondsPerHour: 3600000,
    msPerHr: 3600000,
    millisecondsPerHr: 3600000,
    // Milliseconds per day
    msPerDay: 86400000,
    millisecondsPerDay: 86400000,
    // Milliseconds per year (common and leap)
    msPerCommonYear: 31536000000,
    millisecondsPerCommonYear: 31536000000,
    msPerLeapYear: 31622400000,
    millisecondsPerLeapYear: 31622400000,
    // Seconds per minute
    secPerMin: 60,
    secsPerMin: 60,
    secondsPerMinute: 60,
    secPerMinute: 60,
    secsPerMinute: 60,
    // Seconds per hour
    secPerHr: 3600,
    secsPerHr: 3600,
    secPerHour: 3600,
    secsPerHour: 3600,
    secondsPerHour: 3600,
    secondsPerHr: 3600,
    //Seconds per day
    secPerDay: 86400,
    secsPerDay: 86400,
    secondPerDay: 86400,
    secondsPerDay: 86400,
    //Seconds per week
    secPerWeek: 604800,
    secsPerWeek: 604800,
    secondPerWeek: 604800,
    secondsPerWeek: 604800,
    // Seconds per year (common and leap)
    secPerCommonYear: 31536000,
    secondsPerCommonYear: 31536000,
    secPerLeapYear: 31622400,
    secondsPerLeapYear: 31622400,
    // Minutes per hour
    minPerHr: 60,
    minPerHour: 60,
    minutesPerHr: 60,
    minutesPerHour: 60,
    // Minutes per day
    minPerDay: 1440,
    minutesPerDay: 1440,
    // Minutes per week
    minPerWeek: 10080,
    minutesPerWeek: 10080,
    // Minutes per year (common and leap)
    minPerCommonYear: 525600,
    minutesPerCommonYear: 525600,
    minPerLeapYear: 527040,
    minutesPerLeapYear: 527040,
    // Hours per day
    hrPerDay: 24,
    hrsPerDay: 24,
    hoursPerDay: 24,
    // Hours per week
    hrPerWeek: 168,
    hrsPerWeek: 168,
    hoursPerWeek: 168,
    // Hours per year (common and leap)
    hrPerCommonYear: 8760,
    hrsPerCommonYear: 8760,
    hoursPerCommonYear: 8760,
    hrPerLeapYear: 8784,
    hrsPerLeapYear: 8784,
    hoursPerLeapYear: 8784,
    // Days per week
    daysPerWeek: 7,
    // Days per year (common and leap)
    daysPerCommonYear: 365,
    daysPerCommonYr: 365,
    daysPerLeapYear: 366,
    daysPerLeapYr: 366,
    daysPerYrAverage: 365.25,
    daysPerYrMean: 365.25,
    daysPerYearAverage: 365.25,
    daysPerYearMean: 365.25,
    // Weeks per year (common and leap)
    weeksPerYear: { full: 52, rem: { common: 1, leap: 2 } },
    weeksPerCommonYear: (365 / 7),
    weeksPerLeapYear: (366 / 7),
    fullWeeksPerYear: 52,
    weeksPerYearFloored: 52,
    weeksPerCommonYearFlooredRemainder: 1,
    weeksPerLeapYearFlooredRemainder: 2,
    // Months per year
    monthsPerYear: 12,
    monPerYear: 12,
    monsPerYear: 12,
    monPerYr: 12,
    monsPerYr: 12,
    monthsPerYr: 12,
    // Days per month (provides values for each month)
    daysPerMonth: daysPerMonth,
    daysPerMon: daysPerMonth,
    // Unix / epoch start date & time components
    epochStartYear: 1970,
    epochStartMonth: 1,
    epochStartDate: 1,
    epochStartHour: 0,
    epochStartMinute: 0,
    epochStartSecond: 0,
    epochStartDateStr: '1970-01-01',
    epochStartTimeStr: '00:00:00.000Z',
    epochStartDateTimeStr: '1970-01-01T00:00:00.000Z',
    unixStartYear: 1970,
    unixStartMonth: 1,
    unixStartDate: 1,
    unixStartHour: 0,
    unixStartMinute: 0,
    unixStartSecond: 0,
    unixStartDateStr: '1970-01-01',
    unixStartTimeStr: '00:00:00.000Z',
    unixStartDateTimeStr: '1970-01-01T00:00:00.000Z',
};
//# sourceMappingURL=datetime.js.map