"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sysMessages_1 = require("../../../model/shared/sysMessages");
exports.apiValidation = (req, res, next) => {
    if (req.accepts("application/json")) {
        next();
    }
    else {
        next(new sysMessages_1.APIError("Content Type not supported", "This API only supports application/json", 400));
    }
};
