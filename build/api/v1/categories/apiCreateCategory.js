"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const sysMessages_1 = require("../../../model/shared/sysMessages");
const db_1 = require("../../../db/db");
exports.apiCreateCategory = (req, res, next) => {
    const requiredFields = ["cName"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every(field => givenFields.includes(field))) {
        return next(sysMessages_1.APIError.errMissingBody());
    }
    if (!req.user) {
        next(sysMessages_1.APIError.errUnauthorizedAccess());
    }
    const receivedCatName = req.body.cName;
    console.log(req.body.cName);
    db_1.db.one("select * from categories where category_name = ${category_name} LIMIT 1", { category_name: receivedCatName })
        .then((category_name) => {
        next(sysMessages_1.APIError.errValueExists());
    })
        .catch(err => {
        console.log(err);
        const newCategory = {
            id: v4_1.default(),
            category_name: req.body.cName || "",
            category_image: [],
            user_id: req.user.id
        };
        db_1.db.none(db_1.pgp.helpers.insert(newCategory, undefined, "categories"))
            .then(() => {
            res.status(201).json(sysMessages_1.PublicInfo.infoCreated({ newCategory: newCategory }));
        })
            .catch(err => {
            if (err instanceof db_1.pgp.errors.QueryResultError) {
                next(sysMessages_1.APIError.errNotFound());
            }
            else {
                console.log(err);
                next(sysMessages_1.APIError.errInvalidQueryParameter());
            }
        });
    })
        .catch(err => {
        next(sysMessages_1.APIError.errSessionExpired());
    });
};
