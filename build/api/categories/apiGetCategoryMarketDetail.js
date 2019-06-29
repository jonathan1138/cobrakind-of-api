"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const categoryMarketDetail_1 = require("../../model/shared/categoryMarketDetail");
exports.apiGetCategoryMarketDetail = (req, res, next) => {
    const categoryID = req.params.id;
    const selectedCategory = data_1.DataStore.categories.find((element) => element.id == categoryID);
    if (selectedCategory) {
        const selectedMarkets = data_1.DataStore.markets.filter((item) => item.categoryID == categoryID);
        res.json(new categoryMarketDetail_1.CategoryMarketDetail(selectedCategory, selectedMarkets));
    }
    else {
        res.json({ "status": "failed", "message": "Element not found" });
    }
};
