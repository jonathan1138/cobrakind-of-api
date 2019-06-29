"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("./categories");
const markets_1 = require("./markets");
class CategoryMarketDetail extends categories_1.Category {
    constructor(categoryData, marketData) {
        super(categoryData);
        this.categoryName = categoryData.categoryName;
        this.markets = marketData.map((item) => new markets_1.Market(item));
    }
}
exports.CategoryMarketDetail = CategoryMarketDetail;
