// ensure environment knows testing is occurring
process.env.mocha = true;

// Store original process.argv
const oldProcArgs = Object.assign({}, process.argv);

/************************************** THIRD-PARTY IMPORTS ***************************************/
const { expect } = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const { stderr, stdout } = require('test-console');
const _ = require('lodash');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const CONSTANTS = require('../lib/index').commonConstants;
const datetime = CONSTANTS.datetime;
const math = CONSTANTS.math;
const defaultPorts = CONSTANTS.defaultPorts;
const science = CONSTANTS.science;
const sci = CONSTANTS.sci;
const logLevels = CONSTANTS.logLevels;
const logLvls = CONSTANTS.logLvls;
const lifeTheUniverseAndEverything = CONSTANTS.lifeTheUniverseAndEverything;
const lengths = CONSTANTS.lengths;
const { dbPortsList, dbPorts } = CONSTANTS;
const { regexps } = CONSTANTS;

/******************************************** HELPERS *********************************************/
/**
 * Prevents console.error messages emitted by code from reaching the console for given function
 * @param  {Function} fn - function to run without showing errors
 * @return {Object<{errorLogs: string[], warnLogs: string[], result: any}>} array containing
 *              warnings & errors outputted running the function, and the function result
 */
function blockErrorOutput(fn) {
    const errorLogs = [];
    const warnLogs = [];

    const errorOrig = console.error;
    console.error = (...msgs) => errorLogs.push(msgs);
    const warnOrig = console.warn;
    console.warn = (...msgs) => warnLogs.push(msgs);

    const result = fn();

    console.error = errorOrig;
    console.warn = warnOrig;

    return { errorLogs, warnLogs, result };
}

/********************************************* TESTS **********************************************/
describe('datetime', function() {
    it('exists', function() {
        expect(datetime).to.exist;
    });
    it('is an object', function() {
        expect(datetime).to.be.an('object');
    });
    it('#datetime.isLeap returns true for leap years, false for common years', function() {
        expect(datetime.isLeap(4)).to.be.true;
        expect(datetime.isLeap(1600)).to.be.true;
        expect(datetime.isLeap(1601)).to.be.false;
        expect(datetime.isLeap(1700)).to.be.false;
        expect(datetime.isLeap(2000)).to.be.true;
        expect(datetime.isLeap(2001)).to.be.false;
        expect(datetime.isLeap(2004)).to.be.true;
        expect(datetime.isLeap(2016)).to.be.true;
        expect(datetime.isLeap(2100)).to.be.false;
        expect(datetime.isLeap(2300)).to.be.false;
        expect(datetime.isLeap(2400)).to.be.true;
        expect(datetime.isLeap(2408)).to.be.true;
    });
    it('datetime.isLeap casts strings to numbers and runs accordingly', function () {
        expect(datetime.isLeap('2000')).to.be.true;
        expect(datetime.isLeap('2001')).to.be.false;
        expect(datetime.isLeap('2408')).to.be.true;
    });

    it('is able to reference microsecond-handling methods', function () {
        expect(datetime.microsecondsPerMillisecond).to.eql(1000);
        expect(datetime.microsecondsPerMs).to.eql(1000);
        expect(datetime.usPerMs).to.eql(1000);
        expect(datetime.usecondsPerMs).to.eql(1000);
        expect(datetime.usPerMillisecond).to.eql(1000);
        expect(datetime.usecondPerMillisecond).to.eql(1000);
        expect(datetime.usecondsPerMillisecond).to.eql(1000);
        expect(datetime.μPerMs).to.eql(1000);
        expect(datetime.μsPerMs).to.eql(1000);
        expect(datetime.μsecondsPerMs).to.eql(1000);
        expect(datetime.μPerMillisecond).to.eql(1000);
        expect(datetime.μsecondPerMillisecond).to.eql(1000);
        expect(datetime.μsPerMillisecond).to.eql(1000);
        expect(datetime.μsecondsPerMillisecond).to.eql(1000);
    });

    it('is able to reference hours/day methods', function () {
        expect(datetime.hrPerDay).to.eql(24);
        expect(datetime.hrsPerDay).to.eql(24);
        expect(datetime.hoursPerDay).to.eql(24);
    });

    it('is able to reference seconds/day methods', function () {
        expect(datetime.secPerDay).to.eql(86400);
        expect(datetime.secsPerDay).to.eql(86400);
        expect(datetime.secondPerDay).to.eql(86400);
        expect(datetime.secondsPerDay).to.eql(86400);
    });
});

describe('constants.math', function() {
    it('exists', function () {
        expect(math).to.exist;
    });
});

describe('constants.defaultPorts', function() {
    it('exists', function () {
        expect(defaultPorts).to.exist;
    });
});

describe('constants.dbPorts', function() {
    it('exists', function () {
        expect(dbPorts).to.exist;
    });
});

describe('constants.dbPortsList', function() {
    it('exists', function () {
        expect(dbPortsList).to.exist;
    });
    it('is an array', function() {
        expect(dbPortsList).to.be.a('array');
    });
    it('contains only numbers', function() {
        _.forEach(dbPortsList, (dbPort) => {
            expect(dbPort).to.be.a('number');
        });
    });
    it('contains referenced numbers, and all numbers in referenced (source) arrays', function() {
        expect(dbPortsList).to.contain(1025);
        expect(dbPortsList).to.contain(1433);
        expect(dbPortsList).to.contain(1521);
        expect(dbPortsList).to.contain(1526);
        expect(dbPortsList).to.contain(1530);
        expect(dbPortsList).to.contain(3306);
        expect(dbPortsList).to.contain(5000);
        expect(dbPortsList).to.contain(5432);
        expect(dbPortsList).to.contain(5984);
        expect(dbPortsList).to.contain(6379);
        expect(dbPortsList).to.contain(9200);
        expect(dbPortsList).to.contain(27017);
        expect(dbPortsList).to.contain(27018);
        expect(dbPortsList).to.contain(50000);
    });
});

describe('constants.science', function() {
    it('exists', function () {
        expect(science).to.exist;
    });
});

describe('constants.sci', function() {
    it('exists', function () {
        expect(sci).to.exist;
    });
});

describe('constants.logLevels', function() {
    it('exists', function () {
        expect(logLevels).to.exist;
    });
});

describe('constants.logLvls', function() {
    it('exists', function () {
        expect(logLvls).to.exist;
    });
});

describe('constants.lifeTheUniverseAndEverything', function() {
    it('exists', function () {
        expect(lifeTheUniverseAndEverything).to.exist;
    });
});

describe('constants.lengths', function() {
    it('exists', function () {
        expect(lengths).to.exist;
    });
    it('has field maxChars', function () {
        expect(lengths.maxChars).to.exist;
    });
    it('has field maxSeconds', function () {
        expect(lengths.maxSeconds).to.exist;
    });
});

describe('constants.regexps', function() {
    it('exists', function () {
        expect(regexps).to.exist;
    });
    it('has field FIRST_CHAR_REGEXP', function () {
        expect(regexps.FIRST_CHAR_REGEXP).to.exist;
    });
    it('has field TIME_24HR_FORMAT', function () {
        expect(regexps.TIME_24HR_FORMAT).to.exist;
    });
    it('has field "DD/MM/YY_DATE"', function () {
        expect(regexps["DD/MM/YY_DATE"]).to.exist;
    });
    it('has field HEX_OF_COLOR_VAL', function () {
        expect(regexps.HEX_OF_COLOR_VAL).to.exist;
    });
});

// Restore original process.argv
process.argv = Object.assign({}, oldProcArgs);
