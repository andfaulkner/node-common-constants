/************************************** THIRD-PARTY IMPORTS ***************************************/
import { datetime } from './src/datetime';
import { math } from './src/math';
import { defaultPorts, dbPorts, dbPortsList } from './src/default-ports';
import { science } from './src/science';

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
export const commonConstants = {
    datetime,
    dateTime: datetime,
    dateAndTime: datetime,

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
