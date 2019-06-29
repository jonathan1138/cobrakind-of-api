import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

export const apiUpdateCategory: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const categoryIndex = DataStore.categories.findIndex((item: any) => item.id == categoryID);
    if (categoryIndex > -1) {
        const originalCategory = DataStore.categories[categoryIndex];
        const newCategory = {
            id: categoryID, 
            categoryName: req.body.categoryName || originalCategory.categoryName,
            categoryImg: req.body.categoryImg || originalCategory.categoryImg
        }
        DataStore.categories[categoryIndex] = newCategory;
        res.json({"status": "success", "message": "Element Updated"});
    }
    else {
        res.json({"status": "error", "message": "Element not found"});
    }
}