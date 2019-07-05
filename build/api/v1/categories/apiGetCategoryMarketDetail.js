"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoryMarketDetail_1 = require("../../../model/shared/categoryMarketDetail");
const static_1 = require("../general/static");
const sysMessages_1 = require("../../../model/shared/sysMessages");
const db_1 = require("../../../db/db");
exports.apiGetCategoryMarketDetail = (req, res, next) => {
    const categoryID = req.params.id;
    db_1.db.one("select * from categories where id = ${id}", { id: categoryID })
        .then((selectedCategory) => {
        if (selectedCategory) {
            const catImgNames = selectedCategory.category_image || [];
            const imageURLs = catImgNames.map(static_1.fileMapper(req.app.get("env")));
            db_1.db.any("select * from markets where category_id = ${id}", { id: categoryID })
                .then((selectedMarkets) => {
                res.json(new categoryMarketDetail_1.CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs));
            });
            // res.json(new PublicInfo("Category Market Details...", 200, {
            //     category: new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs)
            // }));
        }
        else {
            res.json(sysMessages_1.APIError.errNotFound());
        }
    });
};
