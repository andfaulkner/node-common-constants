"use strict";
/***************************************** REQUEST TYPES ******************************************/
exports.allRequestTypes = [
    'get', 'post', 'put', 'patch', 'delete', 'link', 'options', 'head', 'connect', 'trace'
];
exports.requestTypes = exports.allRequestTypes;
exports.reqTypes = exports.allRequestTypes;
exports.allReqTypes = exports.allRequestTypes;
exports.commonRequestTypes = ['get', 'post', 'put', 'patch'];
exports.mainRequestTypes = exports.commonRequestTypes;
exports.commonReqTypes = exports.commonRequestTypes;
exports.mainReqTypes = exports.commonRequestTypes;
/****************************************** STATUS CODES ******************************************/
exports.statusCodes = {
    ok: 200,
    multipleChoices: 300,
    movedPermanently: 301,
    found: 302,
    notModified: 304,
    temporaryRedirect: 307,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    gone: 410,
    internalServerError: 500,
    notImplemented: 501,
    serviceUnavailable: 503,
    permissionDenied: 550,
};
/**************************************** BUNDLED EXPORTS *****************************************/
exports.http = {
    statusCodes: exports.statusCodes,
    allRequestTypes: exports.allRequestTypes,
    requestTypes: exports.allRequestTypes,
    reqTypes: exports.allRequestTypes,
    allReqTypes: exports.allRequestTypes,
    commonRequestTypes: exports.commonRequestTypes,
    mainRequestTypes: exports.commonRequestTypes,
    commonReqTypes: exports.commonRequestTypes,
    mainReqTypes: exports.commonRequestTypes,
};
//# sourceMappingURL=http.js.map