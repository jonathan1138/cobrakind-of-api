"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("../../../model/shared/categories");
const categoryFilters_1 = require("../../../model/shared/categoryFilters");
const db_1 = require("../../../db/db");
exports.apiGetCategories = (req, res, next) => {
    const filters = new categoryFilters_1.CategoryFilters(req.query);
    db_1.db.any("select * from categories where ${condition:raw}", { condition: filters.getCondition() }).then((categories) => {
        res.json(categories.map((item) => new categories_1.Category(item)));
        // res.json(new PublicInfo("Categories", 200, {
        //     category: DataStore.categories.map((item: any) => new Category(item))
        // })); 
    });
};
