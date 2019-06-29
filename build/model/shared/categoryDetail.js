"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categorySummary_1 = require("./categorySummary");
const subcats_1 = require("./subcats");
class CategoryDetail extends categorySummary_1.CategorySummary {
    constructor(categoryData, subcatData) {
        super(categoryData);
        this.categoryName = categoryData.categoryName;
        this.subcategories = subcatData.map((item) => new subcats_1.SubCat(item));
    }
}
exports.CategoryDetail = CategoryDetail;
