"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetUserDetail = (req, res, next) => {
    res.send("Details for user with ID " + req.params.id);
};
