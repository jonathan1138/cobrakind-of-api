import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { CategoryMarketDetail } from "../../model/shared/categoryMarketDetail";

export const apiGetCategoryMarketDetail: RequestHandler = (req, res, next) => {
    const categoryID = req.params.id;
    const selectedCategory = DataStore.categories.find((element: any) => element.id == categoryID);
    if (selectedCategory) {
        const selectedMarkets = DataStore.markets.filter((item: any) => item.categoryID == categoryID);
        res.json(new CategoryMarketDetail(selectedCategory, selectedMarkets));
    }
    else {
        res.json({"status": "failed", "message": "Element not found"});
    }
};