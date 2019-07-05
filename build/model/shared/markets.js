"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Market {
    constructor(data) {
        this.marketID = data.id;
        this.categoryID = data.category_id;
        this.marketName = data.market_name;
        this.marketImage = data.market_image || [];
    }
}
exports.Market = Market;
