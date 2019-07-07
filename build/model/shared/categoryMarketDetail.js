"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("./categories");
const markets_1 = require("./markets");
class CategoryMarketDetail extends categories_1.Category {
    constructor(data, cImgs) {
        super(data);
        this.cName = data.category_name;
        this.markets = data.markets.map((item) => new markets_1.Market(item));
        this.cImg = cImgs;
    }
}
exports.CategoryMarketDetail = CategoryMarketDetail;
