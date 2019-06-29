import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

export const apiDeleteCategory: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const categoryIndex = DataStore.categories.findIndex((item: any) => item.id == categoryID);
    if (categoryIndex > -1) {
        DataStore.categories.splice(categoryIndex, 1);
        res.json({"status": "success", "message": "Element removed"});
    }
    else {
        res.json({"status": "error", "message": "Element not found"});
    }
}