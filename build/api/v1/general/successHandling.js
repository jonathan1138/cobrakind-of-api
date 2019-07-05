"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSuccessHandler = (req, res, next) => {
    console.log(req.statusCode);
    next();
};
