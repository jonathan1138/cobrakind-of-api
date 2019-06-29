"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const categoryDetail_1 = require("../../model/shared/categoryDetail");
exports.apiGetCategoryDetail = (req, res, next) => {
    const categoryID = req.params.id;
    const selectedCategory = data_1.DataStore.categories.find((element) => element.id == categoryID);
    if (selectedCategory) {
        const selectedSubcategories = data_1.DataStore.subcategories.filter((item) => item.categoryID == categoryID);
        res.json(new categoryDetail_1.CategoryDetail(selectedCategory, selectedSubcategories));
    }
    else {
        res.json({ "status": "failed", "message": "Element not found" });
    }
};
