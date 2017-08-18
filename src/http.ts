/***************************************** REQUEST TYPES ******************************************/
export const allRequestTypes = [
    'get', 'post', 'put', 'patch', 'delete', 'link', 'options', 'head', 'connect', 'trace'
];
export { allRequestTypes as requestTypes }
export { allRequestTypes as reqTypes }
export { allRequestTypes as allReqTypes }

export const commonRequestTypes = ['get', 'post', 'put', 'patch'];
export { commonRequestTypes as mainRequestTypes }
export { commonRequestTypes as commonReqTypes }
export { commonRequestTypes as mainReqTypes }


/****************************************** STATUS CODES ******************************************/
export const statusCodes = {
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
export const http = {
    statusCodes,

    allRequestTypes,
    requestTypes: allRequestTypes,
    reqTypes: allRequestTypes,
    allReqTypes: allRequestTypes,

    commonRequestTypes,
    mainRequestTypes: commonRequestTypes,
    commonReqTypes: commonRequestTypes,
    mainReqTypes: commonRequestTypes,
};
