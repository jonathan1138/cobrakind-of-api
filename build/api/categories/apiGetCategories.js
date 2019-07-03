"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const categories_1 = require("../../model/shared/categories");
const sysMessages_1 = require("../../model/shared/sysMessages");
exports.apiGetCategories = (req, res, next) => {
    //res.json(DataStore.categories.map((item: any) => new Category(item)));
    res.json(new sysMessages_1.PublicInfo("Categories", 200, {
        category: data_1.DataStore.categories.map((item) => new categories_1.Category(item))
    }));
};
