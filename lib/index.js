"use strict";
/************************************** THIRD-PARTY IMPORTS ***************************************/
var datetime_1 = require("./src/datetime");
var math_1 = require("./src/math");
var default_ports_1 = require("./src/default-ports");
var science_1 = require("./src/science");
var logLevels = {
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
    logLevels: logLevels,
    logLvls: logLevels,
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
};
//# sourceMappingURL=index.js.map