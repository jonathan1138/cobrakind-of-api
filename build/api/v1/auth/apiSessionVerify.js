"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const sessionConf_1 = require("../../../config/sessionConf");
const db_1 = require("../../../db/db");
const sysMessages_1 = require("../../../model/shared/sysMessages");
exports.apiSessionVerify = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, sessionConf_1.sessionTokenSecret, (err, decoded) => {
            if (err) {
                next(sysMessages_1.APIError.errUnauthorizedAccess());
            }
            else {
                const userId = decoded.userId;
                db_1.db.one("select * from users where id = ${id}", { id: userId })
                    .then((user) => {
                    console.log(user);
                    req.user = user;
                    next();
                });
            }
        });
    }
    else {
        next();
    }
};
