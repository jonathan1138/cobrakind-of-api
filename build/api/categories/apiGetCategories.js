"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const categories_1 = require("../../model/shared/categories");
exports.apiGetCategories = (req, res, next) => {
    res.json(data_1.DataStore.categories.map((item) => new categories_1.Category(item)));
};
