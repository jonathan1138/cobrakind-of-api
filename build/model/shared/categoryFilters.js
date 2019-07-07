"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db/db");
class CategoryFilters {
    constructor(data) {
        this.categoryName = data.categoryName;
        this.categoryImage = data.categoryImage;
    }
    getCondition() {
        const filterCondition = [
            this.categoryName ? "category_name = ${categoryName}" : "true",
            this.categoryImage ? "category_image = ${categoryImage}" : "true"
        ].join(" AND ");
        return db_1.pgp.as.format(filterCondition, this);
    }
}
exports.CategoryFilters = CategoryFilters;
