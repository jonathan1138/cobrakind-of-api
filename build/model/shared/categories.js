"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    constructor(data) {
        this.id = data.id;
        this.cName = data.category_name || "";
        this.cImg = data.category_image || [];
    }
}
exports.Category = Category;
