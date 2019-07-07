"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Market {
    constructor(data) {
        this.marketID = data.id;
        this.categoryID = data.category_id;
        this.mName = data.market_name;
        this.mImg = data.market_image || [];
    }
}
exports.Market = Market;
