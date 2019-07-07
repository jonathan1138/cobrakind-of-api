"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db/db");
class CategoryFilters {
    constructor(data) {
        this.cName = data.cName;
        this.cImg = data.cImg;
    }
    getCondition() {
        const filterCondition = [
            this.cName ? "category_name = ${cName}" : "true",
            this.cImg ? "category_image = ${cImg}" : "true"
        ].join(" AND ");
        return db_1.pgp.as.format(filterCondition, this);
    }
}
exports.CategoryFilters = CategoryFilters;
