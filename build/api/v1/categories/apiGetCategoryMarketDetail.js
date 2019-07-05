"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoryMarketDetail_1 = require("../../../model/shared/categoryMarketDetail");
const static_1 = require("../general/static");
const sysMessages_1 = require("../../../model/shared/sysMessages");
const db_1 = require("../../../db/db");
exports.apiGetCategoryMarketDetail = (req, res, next) => {
    const categoryID = req.params.id;
    db_1.db.one("select c.*,\
            (select json_agg(markets)\
                from markets where category_id = ${id}\
            ) as markets \
            from categories as c\
            where c.id = ${id}", { id: categoryID })
        .then((data) => {
        const categoryImgNames = data.category_image || [];
        const categoryImgURLs = categoryImgNames.map(static_1.fileMapper(req.app.get("env")));
        res.json(new categoryMarketDetail_1.CategoryMarketDetail(data, categoryImgURLs));
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
