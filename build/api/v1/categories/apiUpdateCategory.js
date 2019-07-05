"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sysMessages_1 = require("../../../model/shared/sysMessages");
const caseConverter = require("change-case-object");
const db_1 = require("../../../db/db");
exports.apiUpdateCategory = (req, res, next) => {
    const categoryID = req.params.id;
    const data = caseConverter.snakeCase(req.body);
    const sql = db_1.pgp.helpers.update(data, undefined, "categories") + " where id = ${id}";
    db_1.db.none(sql, { id: categoryID }).then(() => {
        res.json(sysMessages_1.PublicInfo.infoUpdated({ updatedData: data }));
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
