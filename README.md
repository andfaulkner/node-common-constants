# common-constants

I find myself defining the same constants in project after project. Time to put a stop to that.

## Installation
    yarn add common-constants

OR

    npm add --save common-constants

Exports an object literal containing a set of common constants. Categories:

*   date and time (constants.datetime)
*   math  (constants.math)
*   default ports for various databases and servers (constants.defaultPorts),
*   science (constants.science)
*   common log levels and corresponding numeric values (constants.logLevels)

I am forgetful, so it was made to be extremely forgiving, with multiple variants of each constant
name allowed. e.g. minInHour, minPerHour, minInHr, minPerHr, minutesPerHour, minutesPerHr, etc.).

Also, it's typescript friendly, because I love you guys.

## Why?
Magic numbers are confusing. If you see an algorithm containing the number 60, what are you looking at exactly? Seconds per minute? Minutes per hour? Degrees in one sixth of a circle? Named constants get rid of the problem

----
## Usage example

    import { datetime } as DATETIME_CONST from 'common-constants';

    console.log(DATETIME_CONST.daysPerMonth.jan); // => 31
    console.log(DATETIME_CONST.daysPerCommonYear); // => 365
    console.log(DATETIME_CONST.hrPerDay); // => 24

----
## Date and time values (constants.datetime)

    // Leap year handler
(technically not a constant, but it's commonly needed when date constants are required)

    isLeap: (year: number | string) => boolean

Returns true if the given year is a leap year, false if not

    // Microseconds per millisecond
    microsecondsPerMillisecond: 1000
    microsecondsPerMs:          1000
    usPerMs:                    1000
    usecondsPerMs:              1000
    usPerMillisecond:           1000
    usecondPerMillisecond:      1000
    usecondsPerMillisecond:     1000
    μPerMs:                     1000
    μsPerMs:                    1000
    μsecondsPerMs:              1000
    μPerMillisecond:            1000
    μsecondPerMillisecond:      1000
    μsPerMillisecond:           1000
    μsecondsPerMillisecond:     1000

    // Milliseconds per second
    msPerSec:                   1000
    millisecondsPerSecond:      1000
    msPerSecond:                1000
    msPerSeconds:               1000
    millisecondsPerSec:         1000


    // Milliseconds per minute
    msPerMinute:                60000
    millisecondsPerMinute:      60000
    msPerMin:                   60000
    millisecondsPerMin:         60000

    // Milliseconds per hour
    msPerHour:                  3600000
    millisecondsPerHour:        3600000
    msPerHr:                    3600000
    millisecondsPerHr:          3600000

    // Milliseconds per day
    msPerDay:                   86400000
    millisecondsPerDay:         86400000

    // Milliseconds per year (common and leap)
    msPerCommonYear:            31536000000
    millisecondsPerCommonYear:  31536000000
    msPerLeapYear:              31622400000
    millisecondsPerLeapYear:    31622400000

    // Seconds per minute
    secPerMin:                  60
    secsPerMin:                 60
    secondsPerMinute:           60
    secPerMinute:               60
    secsPerMinute:              60

    // Seconds per hour
    secPerHr:                   3600
    secsPerHr:                  3600
    secPerHour:                 3600
    secsPerHour:                3600
    secondsPerHour:             3600
    secondsPerHr:               3600

    //Seconds per day
    secPerDay:                  86400
    secsPerDay:                 86400
    secondPerDay:               86400
    secondsPerDay:              86400

    //Seconds per week
    secPerWeek:                 604800
    secsPerWeek:                604800
    secondPerWeek:              604800
    secondsPerWeek:             604800

    // Seconds per year (common and leap)
    secPerCommonYear:           31536000
    secondsPerCommonYear:       31536000
    secPerLeapYear:             31622400
    secondsPerLeapYear:         31622400

    // Minutes per hour
    minPerHr:                   60
    minPerHour:                 60
    minutesPerHour:             60
    minutesPerHr:               60

    // Minutes per day
    minPerDay:                  1440
    minutesPerDay:              1440

    // Minutes per week
    minPerWeek:                 10080
    minutesPerWeek:             10080

    // Minutes per year (common and leap)
    minPerCommonYear:           525600
    minutesPerCommonYear:       525600
    minPerLeapYear:             527040
    minutesPerLeapYear:         527040

    // Hours per day
    hrPerDay:                   24
    hrsPerDay:                  24
    hoursPerDay:                24

    // Hours per week
    hrPerWeek:                  168
    hrsPerWeek:                 168
    hoursPerWeek:               168

    // Hours per year (common and leap)
    hrPerCommonYear:            8760
    hrsPerCommonYear:           8760
    hoursPerCommonYear:         8760
    hrPerLeapYear:              8784
    hrsPerLeapYear:             8784
    hoursPerLeapYear:           8784

    // Days per week
    daysPerWeek:                7

    // Days per year (common and leap)
    daysPerCommonYear:          365
    daysPerCommonYr:            365
    daysPerLeapYear:            366
    daysPerLeapYr:              366
    daysPerYrAverage:           365.25
    daysPerYrMean:              365.25
    daysPerYearAverage:         365.25
    daysPerYearMean:            365.25

    // Weeks per year (common and leap)
    weeksPerYear: 
        full: 52
        rem:
            common: 1
            leap: 2
    weeksPerCommonYear:                 365 / 7
    weeksPerLeapYear:                   366 / 7
    fullWeeksPerYear:                   52
    weeksPerYearFloored:                52
    weeksPerCommonYearFlooredRemainder: 1
    weeksPerLeapYearFlooredRemainder:   2

    // Months per year
    monthsPerYear:                      12
    monPerYear:                         12
    monsPerYear:                        12
    monPerYr:                           12
    monsPerYr:                          12
    monthsPerYr:                        12

    // Days per month
    daysPerMon:            daysPerMonth  // see 'daysPerMonths' property below 
    daysPerMonth:
        jan:               31
        january:           31
        feb:
            common: 28
            leap:   29
        february:
            common: 28
            leap:   29
        mar:               31
        march:             31
        apr:               30
        april:             30
        may:               31
        jun:               30
        june:              30
        jul:               31
        july:              31
        aug:               31
        august:            31
        sep:               30
        sept:              30
        september:         30
        oct:               31
        october:           31
        nov:               30
        november:          30
        dec:               31
        december:          31

    // Unix / epoch start date & time components
    epochStartYear:                     1970
    epochStartMonth:                    1
    epochStartDate:                     1
    epochStartHour:                     0
    epochStartMinute:                   0
    epochStartSecond:                   0
    epochStartDateStr:                  '1970-01-01'
    epochStartTimeStr:                  '00:00:00.000Z'
    epochStartDateTimeStr:              '1970-01-01T00:00:00.000Z'

    unixStartYear:                      1970
    unixStartMonth:                     1
    unixStartDate:                      1
    unixStartHour:                      0
    unixStartMinute:                    0
    unixStartSecond:                    0
    unixStartDateStr:                   '1970-01-01'
    unixStartTimeStr:                   '00:00:00.000Z'
    unixStartDateTimeStr:               '1970-01-01T00:00:00.000Z'

----
## Math

    pi:                  3.141592653589
    PI:                  3.141592653589
    π:                   3.141592653589
    e:                   2.718281828459
    euler:               2.718281828459
    EULER:               2.718281828459
    phi:                 1.6180339887498
    PHI:                 1.6180339887498
    φ:                   1.6180339887498

    // Geometry: circle
    degreesInCircle:     360
    degInCircle:         360
    circleDeg:           360
    circleDegrees:       360

    // Geometry: half-circle
    degreesInHalfCircle: 180
    degInHalfCircle:     180
    halfCircleDeg:       180
    halfCircleDegrees:   180

    // Geometry: right angle
    rightAngleDeg:       90
    rightAngleDegrees:   90
    rightAngle:          90

    // Geometry: sides in a square
    sidesInSquare:       4
    sidesInASquare:      4
    squareSides:         4
    numSidesSquare:      4

    // Geometry: sides in a triangle
    sidesInTriangle:     3
    sidesInATriangle:    3
    triangleSides:       3
    numSidesTriangle:    3

----
## Default ports (constants.defaultPorts)

    dbPorts:        [1025, 1433, 1521, 1522, ..., 6379, 7199, 8983, 9200, 27017, 27018, 50000],

    all:
        redis:      6379
        mongo:      27018
        mongodb:    27018
        postgres:   5432
        postgresql: 5432
        pg:         5432
        mysql:      3306
        express:    3000
        expressjs:  3000
        expressJS:  3000
        expressJs:  3000
        http:       80
        telnet:     23
        smtp:       25
        dns:        53
        pop3:       110
        irc:        194
        https:      443
        ssh:        22
        ...etc...

----
## Log levels - as numeric values (constants.logLevels)

    silly:   1
    verbose: 2
    debug:   3
    info:    4
    warn:    5
    error:   6
    wtf:     7

----
## Life, the universe, and everything

    lifeTheUniverseAndEverything: 42

----
## Science

    speedOfLightMetresPerSec:    299792458
    speedOfLightMetresPerSecond: 299792458
    speedOfLightMPS:             299792458
    lightSpeedMetresPerSec:      299792458
    lightSpeedMetresPerSecond:   299792458

    zeroKelvinInCelsius: -273.15
    zeroKInCelsius:      -273.15
    zeroKelvinInC:       -273.15

----

More coming soon.
