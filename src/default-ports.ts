const _ = require('lodash');
const uniq = _.uniq;

//const uniq = (((typeof _ !== 'undefined') && (typeof _ !== 'null') && (_ !== null) && (_)))
//    ? _.uniq
//    : (require('lodash'))
//        ? require('lodash').uniq
//        : require('lodash.uniq');

export const dbPorts = {
    teradata: 1025,
    mssql: 1433,
    oracle: [1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530],
    mariaDB: 3306,
    mariaDb: 3306,
    mariadb: 3306,
    maria: 3306,
    mysql: 3306,
    sap: 5000,
    pg: 5432,
    postgres: 5432,
    postgresql: 5432,
    postgreSQL: 5432,
    couch: 5984,
    redis: 6379,
    cassandra: 7199,
    solr: 8983,
    elasticsearch: 9200,
    mongo: [27017, 27018],
    mongodb: [27017, 27018],
    db2: 50000,
};

/**
 * Flat array containing list of all database ports
 */
export const dbPortsList = ((dbPorts) => uniq(
    Object.keys(dbPorts).reduce((acc, db) => acc.concat(dbPorts[db]), [])
))(dbPorts);

export const defaultPorts = Object.assign({},
    dbPorts,
    {
        express: 3000,
        expressJS: 3000,
        expressJs: 3000,
        expressjs: 3000,
        http: 80,
        telnet: 23,
        smtp: 25,
        dns: 53,
        pop3: 110,
        irc: 194,
        https: 443,
        ssh: 22,
    }
);

