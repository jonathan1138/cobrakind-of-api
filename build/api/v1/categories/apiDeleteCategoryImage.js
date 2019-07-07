"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sysMessages_1 = require("../../../model/shared/sysMessages");
const db_1 = require("../../../db/db");
const categoryFilters_1 = require("../../../model/shared/categoryFilters");
exports.apiDeleteCategoryImage = (req, res, next) => {
    const categoryID = req.params.id;
    const cImg = new categoryFilters_1.CategoryFilters(req.query).cImg;
    console.log(cImg);
    if (!cImg || !categoryID) {
        next(sysMessages_1.APIError.errMissingBody());
    }
    else {
        const sql = "update categories\
        set category_image = array_remove(category_image, ${cImg})\
        where id = ${id}";
        db_1.db.none(sql, { cImg: req.query.cImg, id: categoryID })
            .then(() => {
            res.status(204).json(sysMessages_1.PublicInfo.infoDeleted());
        })
            .catch(err => {
            if (err instanceof db_1.pgp.errors.QueryResultError) {
                next(sysMessages_1.APIError.errNotFound());
            }
            else {
                next(sysMessages_1.APIError.errInvalidQueryParameter());
            }
        });
    }
};
