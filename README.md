# common-constants

I find myself defining the same constants in project after project. Time to put a stop to that.

Exports an object literal containing a set of common constants. Categories:

    *   date and time (constants.datetime)
    *   math  (constants.math)
    *   default ports for various databases and servers (constants.defaultPorts),
    *   science (constants.science)
    *   common log levels and corresponding numeric values (constants.logLevels)

I am forgetful, so it was made to be extremely forgiving, with multiple variants of each constant
name allowed. e.g. minInHour, minPerHour, minInHr, minPerHr, minutesPerHour, minutesPerHr, etc.).

Also, it's typescript friendly, because I love you guys.

----
## Date and time values (constants.datetime)

### Leap year handler
    *  technically not a constant, but it's commonly needed when date constants are required

    isLeap: (year: number | string) => boolean
    *   returns true if the given year is a leap year, false if not

### Milliseconds per second
    msInSec:               1000
    millisecondsInSeconds: 1000
    msInSeconds:           1000

### Seconds per minute
    secInMin:              60
    secsInMin:             60
    secPerMin:             60
    secsPerMin:            60
    secondsPerMinute:      60
    secondsInMinute:       60
    secPerMinute:          60
    secInMinute:           60
    secsPerMinute:         60
    secsInMinute:          60

### Minutes per hour
    minInHr:               60
    minInHour:             60
    minutesInHr:           60
    minutesInHour:         60
    minPerHr:              60
    minPerHour:            60
    minutesPerHour:        60
    minutesPerHr:          60

    hrInDay:               24
    hrsInDay:              24
    hoursInDay:            24
    hrPerDay:              24
    hrsPerDay:             24
    hoursPerDay:           24

### Days per year (both leap and regular)
    daysInCommonYear:      365
    daysInLeapYear:        366
    daysPerCommonYear:     365
    daysPerLeapYear:       366
    daysInCommonYr:        365
    daysInLeapYr:          366
    daysPerCommonYr:       365
    daysPerLeapYr:         366
    daysInNormalYear:      365
    daysPerNormalYear:     365
    daysInNormalYr:        365
    daysPerNormalYr:       365
    daysInRegularYear:      365
    daysPerRegularYear:     365
    daysInRegularYr:        365
    daysPerRegularYr:       365
    daysInNonleapYear:      365
    daysPerNonleapYear:     365
    daysInNonleapYr:        365
    daysPerNonleapYr:       365

    ## daysPerMonth
    daysInMonth:           daysPerMonth
    daysPerMon:            daysPerMonth
    daysInMon:             daysPerMonth

    daysPerMonth:
        jan:                             31
        january:                         31
        feb:
            common: 28
            leap: 29
        february:
            common: 28
            leap: 29
        mar:                             31
        march:                           31
        apr:                             30
        april:                           30
        may:                             31
        jun:                             30
        june:                            30
        jul:                             31
        july:                            31
        aug:                             31
        august:                          31
        sep:                             30
        sept:                            30
        september:                       30
        oct:                             31
        october:                         31
        nov:                             30
        november:                        30
        dec:                             31
        december:                        31

----
## Math

    pi:  3.141592653589,
    PI:  3.141592653589,
    π:   3.141592653589,
    e:   2.718281828459,
    euler:   2.718281828459,
    EULER:   2.718281828459,
    phi: 1.6180339887498,
    PHI: 1.6180339887498,
    φ:   1.6180339887498,

----
## Default ports (constants.defaultPorts)

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

    zeroKelvinInCelsius: -273.15,
    zeroKInCelsius:      -273.15,
    zeroKelvinInC:       -273.15,

----

More coming soon.
