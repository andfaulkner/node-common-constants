"use strict";
/************************************** THIRD-PARTY IMPORTS ***************************************/
var datetime_1 = require("./src/datetime");
exports.dateTime = datetime_1.datetime;
var math_1 = require("./src/math");
exports.math = math_1.math;
var default_ports_1 = require("./src/default-ports");
exports.defaultPorts = default_ports_1.defaultPorts;
var science_1 = require("./src/science");
exports.science = science_1.science;
var regexps_1 = require("./src/regexps");
exports.regexps = regexps_1.regexps;
exports.logLevels = {
    silly: 1,
    verbose: 2,
    debug: 3,
    info: 4,
    warn: 5,
    error: 6,
    wtf: 7,
};
/**************************************** TYPE DEFINITIONS ****************************************/
exports.commonConstants = {
    datetime: datetime_1.datetime,
    dateTime: datetime_1.datetime,
    dateAndTime: datetime_1.datetime,
    math: math_1.math,
    defaultPorts: {
        db: default_ports_1.dbPorts,
        dbPortsList: default_ports_1.dbPortsList,
        general: default_ports_1.defaultPorts,
        all: Object.assign({}, default_ports_1.dbPorts, default_ports_1.defaultPorts)
    },
    defPorts: default_ports_1.defaultPorts,
    dbPorts: default_ports_1.dbPorts,
    dbPortsList: default_ports_1.dbPortsList,
    science: science_1.science,
    sci: science_1.science,
    logLevels: exports.logLevels,
    logLvls: exports.logLevels,
    lifeTheUniverseAndEverything: 42,
    lifeTheUniverseEverything: 42,
    // TODO document this section
    lengths: {
        maxChars: {
            // web requirements
            domainName: 253,
            emailAddress: 254,
            // social media
            tweet: 140,
            twitter: 140,
            twitterTweet: 140,
            postgresIdentifier: 63
        },
        maxSeconds: {
            vineVideo: 6.5,
            vine: 6.5,
            youtubeVideo: 43200,
        }
    },
    regexps: regexps_1.regexps,
};
var lengths = exports.commonConstants.lengths, lifeTheUniverseAndEverything = exports.commonConstants.lifeTheUniverseAndEverything;
exports.lengths = lengths;
exports.lifeTheUniverseAndEverything = lifeTheUniverseAndEverything;
//# sourceMappingURL=index.js.map