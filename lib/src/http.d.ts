/***************************************** REQUEST TYPES ******************************************/
export declare const allRequestTypes: string[];
export { allRequestTypes as requestTypes };
export { allRequestTypes as reqTypes };
export { allRequestTypes as allReqTypes };
export declare const commonRequestTypes: string[];
export { commonRequestTypes as mainRequestTypes };
export { commonRequestTypes as commonReqTypes };
export { commonRequestTypes as mainReqTypes };
/****************************************** STATUS CODES ******************************************/
export declare const statusCodes: {
    ok: number;
    multipleChoices: number;
    movedPermanently: number;
    found: number;
    notModified: number;
    temporaryRedirect: number;
    badRequest: number;
    unauthorized: number;
    forbidden: number;
    notFound: number;
    gone: number;
    internalServerError: number;
    notImplemented: number;
    serviceUnavailable: number;
    permissionDenied: number;
};
/**************************************** BUNDLED EXPORTS *****************************************/
export declare const http: {
    statusCodes: {
        ok: number;
        multipleChoices: number;
        movedPermanently: number;
        found: number;
        notModified: number;
        temporaryRedirect: number;
        badRequest: number;
        unauthorized: number;
        forbidden: number;
        notFound: number;
        gone: number;
        internalServerError: number;
        notImplemented: number;
        serviceUnavailable: number;
        permissionDenied: number;
    };
    allRequestTypes: string[];
    requestTypes: string[];
    reqTypes: string[];
    allReqTypes: string[];
    commonRequestTypes: string[];
    mainRequestTypes: string[];
    commonReqTypes: string[];
    mainReqTypes: string[];
};
