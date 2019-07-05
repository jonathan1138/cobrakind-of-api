"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    constructor(data) {
        this.id = data.id;
        this.categoryName = data.category_name || "";
        this.categoryImage = data.category_image || [];
    }
}
exports.Category = Category;
