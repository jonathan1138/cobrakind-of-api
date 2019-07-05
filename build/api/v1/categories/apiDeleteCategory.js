"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sysMessages_1 = require("../../../model/shared/sysMessages");
const db_1 = require("../../../db/db");
exports.apiDeleteCategory = (req, res, next) => {
    const categoryID = req.params.id;
    db_1.db.none("delete from categories where id = ${id}", { id: categoryID })
        .then(() => {
        res.status(204).json(sysMessages_1.PublicInfo.infoDeleted());
        //res.json(PublicInfo.infoDeleted());
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
};
