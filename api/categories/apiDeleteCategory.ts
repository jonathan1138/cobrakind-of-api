import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../model/shared/sysMessages";

export const apiDeleteCategory: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const categoryIndex = DataStore.categories.findIndex((item: any) => item.id == categoryID);
    if (categoryIndex > -1) {
        DataStore.categories.splice(categoryIndex, 1);
        res.json(new PublicInfo("Category Deleted", 200));
    }
    else {
        res.json(new APIError("Validation Error", "Category not found.", 400));
    }
}