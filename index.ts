/************************************** THIRD-PARTY IMPORTS ***************************************/
import { datetime } from './src/datetime';
import { math } from './src/math';
import { defaultPorts, dbPorts, dbPortsList } from './src/default-ports';
import { science } from './src/science';
import { lengths } from './src/lengths';
import { regexps } from './src/regexps';
import { lifeTheUniverseAndEverything } from './src/life-the-universe-and-everything';
import { http } from './src/http';


export const logLevels = {
    silly: 1,
    verbose: 2,
    debug: 3,
    info: 4,
    warn: 5,
    error: 6,
    wtf: 7,
};

/**************************************** TYPE DEFINITIONS ****************************************/
export const commonConstants = {
    datetime,
    dateTime: datetime,
    dateAndTime: datetime,

    http,

    math,

    defaultPorts: {
        db: dbPorts,
        dbPortsList,
        general: defaultPorts,
        all: Object.assign({}, dbPorts, defaultPorts)
    },

    defPorts: defaultPorts,

    dbPorts,
    dbPortsList,

    science,
    sci: science,

    logLevels,
    logLvls: logLevels,

    lifeTheUniverseAndEverything: 42,
    lifeTheUniverseEverything: 42,

    // TODO document this section
    lengths,
    regexps,
};

export { datetime as dateTime, defaultPorts, science, regexps, math, lengths,
         lifeTheUniverseAndEverything }

/**
 * All letters in the alphabet, in both upper and lowercase, and all numbers.
 */
export const alphanumsAllBothCaps = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`;

/**
 * All letters in the alphabet in uppercase.
 */
export const alphabetUppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

/**
 * All letters in the alphabet in lowercase.
 */
export const alphabetLowercase = `abcdefghijklmnopqrstuvwxyz`;

/**
 * All digits.
 */
export const digits = `1234567890`;

/**
 * Commonly used http constants.
 */
export { requestTypes, allRequestTypes, commonRequestTypes, mainRequestTypes,
         reqTypes, allReqTypes, mainReqTypes, commonReqTypes,
         statusCodes } from './src/http';
