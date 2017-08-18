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
var lengths_1 = require("./src/lengths");
exports.lengths = lengths_1.lengths;
var regexps_1 = require("./src/regexps");
exports.regexps = regexps_1.regexps;
var life_the_universe_and_everything_1 = require("./src/life-the-universe-and-everything");
exports.lifeTheUniverseAndEverything = life_the_universe_and_everything_1.lifeTheUniverseAndEverything;
var http_1 = require("./src/http");
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
    http: http_1.http,
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
    lengths: lengths_1.lengths,
    regexps: regexps_1.regexps,
};
/**
 * All letters in the alphabet, in both upper and lowercase, and all numbers.
 */
exports.alphanumsAllBothCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
/**
 * All letters in the alphabet in uppercase.
 */
exports.alphabetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/**
 * All letters in the alphabet in lowercase.
 */
exports.alphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
/**
 * All digits.
 */
exports.digits = "1234567890";
/**
 * Commonly used http constants.
 */
var http_2 = require("./src/http");
exports.requestTypes = http_2.requestTypes;
exports.allRequestTypes = http_2.allRequestTypes;
exports.commonRequestTypes = http_2.commonRequestTypes;
exports.mainRequestTypes = http_2.mainRequestTypes;
exports.reqTypes = http_2.reqTypes;
exports.allReqTypes = http_2.allReqTypes;
exports.mainReqTypes = http_2.mainReqTypes;
exports.commonReqTypes = http_2.commonReqTypes;
exports.statusCodes = http_2.statusCodes;
//# sourceMappingURL=index.js.map