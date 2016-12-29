"use strict";
/************************************** THIRD-PARTY IMPORTS ***************************************/
const datetime_1 = require("./src/datetime");
const math_1 = require("./src/math");
const default_ports_1 = require("./src/default-ports");
const science_1 = require("./src/science");
const logLevels = {
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
    defaultPorts: default_ports_1.defaultPorts,
    defPorts: default_ports_1.defaultPorts,
    science: science_1.science,
    sci: science_1.science,
    logLevels,
    logLvls: logLevels,
    lifeTheUniverseAndEverything: 42,
    lifeTheUniverseEverything: 42,
};
//# sourceMappingURL=index.js.map