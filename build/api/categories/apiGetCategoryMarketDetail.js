"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const categoryMarketDetail_1 = require("../../model/shared/categoryMarketDetail");
const static_1 = require("../general/static");
const sysMessages_1 = require("../../model/shared/sysMessages");
exports.apiGetCategoryMarketDetail = (req, res, next) => {
    const categoryID = req.params.id;
    const selectedCategory = data_1.DataStore.categories.find((element) => element.id == categoryID);
    if (selectedCategory) {
        const imageURLs = selectedCategory.categoryImg.map(static_1.fileMapper(req.app.get("env")));
        const selectedMarkets = data_1.DataStore.markets.filter((item) => item.categoryID == categoryID);
        // res.json(new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs));
        res.json(new sysMessages_1.PublicInfo("Category Market Details...", 200, {
            category: new categoryMarketDetail_1.CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs)
        }));
    }
    else {
        next(new sysMessages_1.APIError("Validation Error", "Category Not Found.", 400));
    }
};
