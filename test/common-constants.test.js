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

// Restore original process.argv
process.argv = Object.assign({}, oldProcArgs);
