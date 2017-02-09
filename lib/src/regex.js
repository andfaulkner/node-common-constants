"use strict";
exports.regexps = {
    FIRST_CHAR_REGEXP: /^[\x20\x09\x0a\x0d]*(.)/,
    // Matches: 12:00, 23:42, 1:23, 09:46
    TIME_24HR_FORMAT: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    // Matches: -1, -23, -8, -432    NO MATCH: -0
    NEGATIVE_INTEGER: /^-([1-9][0-9]*)+$/,
    "DD/MM/YY_DATE": /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/,
    HEX_OF_COLOR_VAL: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
};
//# sourceMappingURL=regex.js.map