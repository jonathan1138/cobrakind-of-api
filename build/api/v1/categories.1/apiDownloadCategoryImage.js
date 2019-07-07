"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sysMessages_1 = require("../../../model/shared/sysMessages");
exports.apiDownloadcImg = (req, res, next) => {
    const fileID = req.params.id;
    res.download(path_1.default.resolve("./", "public", "img", fileID), err => {
        if (err) {
            next(new sysMessages_1.APIError("Download Failed", "Cannot download request", 400));
        }
        ;
    });
};
