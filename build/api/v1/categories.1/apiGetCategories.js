"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const categories_1 = require("../../../model/shared/categories");
const categoryFilters_1 = require("../../../model/shared/categoryFilters");
const db_1 = require("../../../db/db");
exports.apiGetCategories = (req, res, next) => {
    db_1.db.any("select * from categories").then(categories => console.log(categories));
    const filters = new categoryFilters_1.CategoryFilters(req.query);
    const filteredData = data_1.DataStore.categories.filter((item) => {
        let conditions = [
            filters.cName ? (item.cName == filters.cName) : true
        ];
        return conditions.every(value => value == true);
    });
    res.json(filteredData.map((item) => new categories_1.Category(item)));
    // res.json(new PublicInfo("Categories", 200, {
    //     category: DataStore.categories.map((item: any) => new Category(item))
    // }));    
};
