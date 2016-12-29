const isLeap = (year: number | string): boolean => {
    const yr = (typeof year === 'string') ? parseInt(year) : year;
    if (((yr % 4 === 0) && (yr % 100 !== 0)) || (yr % 400 === 0)) return true;
    return false;
};

const daysPerMonth = {
    jan: 31,
    january: 31,

    feb:      { common: 28, leap: 29 },
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

export const datetime = {
    //Function to detect leap years
    isLeap,

    // milliseconds per second
    msInSec: 1000,
    msPerSec: 1000,
    millisecondsInSeconds: 1000,
    millisecondsInSecond: 1000,
    millisecondsPerSecond: 1000,
    msInSeconds: 1000,
    msInSecond: 1000,
    msInASecond: 1000,
    msIn1Sec: 1000,
    msPerSecond: 1000,
    msPerSeconds: 1000,
    millisecondsPerSec: 1000,

    //Seconds per minute
    secInMin: 60,
    secsInMin: 60,
    secPerMin: 60,
    secsPerMin: 60,
    secondsPerMinute: 60,
    secondsInMinute: 60,
    secPerMinute: 60,
    secInMinute: 60,
    secsPerMinute: 60,
    secsInMinute: 60,

    //Seconds per hour
    secInHr:               3600,
    secsInHr:              3600,
    secPerHr:              3600,
    secsPerHr:             3600,
    secPerHour:            3600,
    secInHour:             3600,
    secsPerHour:           3600,
    secsInHour:            3600,
    secondsPerHour:        3600,
    secondsInHour:         3600,
    secondsPerHr:          3600,
    secondsInHr:           3600,

    //Minutes per hour
    minInHr: 60,
    minInHour: 60,
    minutesInHr: 60,
    minutesInHour: 60,
    minPerHr: 60,
    minPerHour: 60,
    minutesPerHour: 60,
    minutesPerHr: 60,

    hrInDay: 24,
    hrsInDay: 24,
    hoursInDay: 24,
    hrPerDay: 24,
    hrsPerDay: 24,
    hoursPerDay: 24,

    daysInCommonYear: 365,
    daysInLeapYear: 366,
    daysPerCommonYear: 365,
    daysPerLeapYear: 366,
    daysInCommonYr: 365,
    daysInLeapYr: 366,
    daysPerCommonYr: 365,
    daysPerLeapYr: 366,

    daysPerMonth,
    daysInMonth: daysPerMonth,
    daysPerMon: daysPerMonth,
    daysInMon: daysPerMonth,
};