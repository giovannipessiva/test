export var Constants;
(function (Constants) {
    let HttpStatus;
    (function (HttpStatus) {
        HttpStatus[HttpStatus["OK"] = 200] = "OK";
        HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
        HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
        HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
        HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
        HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
        HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
        HttpStatus[HttpStatus["REQUEST_TOO_LONG"] = 413] = "REQUEST_TOO_LONG";
        HttpStatus[HttpStatus["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
        HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    })(HttpStatus = Constants.HttpStatus || (Constants.HttpStatus = {}));
    let HttpResponseHeader;
    (function (HttpResponseHeader) {
        HttpResponseHeader["LOCATION"] = "Location";
    })(HttpResponseHeader = Constants.HttpResponseHeader || (Constants.HttpResponseHeader = {}));
})(Constants || (Constants = {}));
;
export var ValuesEnum;
(function (ValuesEnum) {
    ValuesEnum[ValuesEnum["SAS"] = 1] = "SAS";
    ValuesEnum[ValuesEnum["DSA"] = 2] = "DSA";
    ValuesEnum[ValuesEnum["GDF"] = 3] = "GDF";
})(ValuesEnum || (ValuesEnum = {}));
;
