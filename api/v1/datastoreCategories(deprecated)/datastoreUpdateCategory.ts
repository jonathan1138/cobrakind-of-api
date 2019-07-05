import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/sysMessages";

export const datastoreUpdateCategory: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const categoryIndex = DataStore.categories.findIndex((item: any) => item.id == categoryID);
    if (categoryIndex > -1) {
        const originalCategory = DataStore.categories[categoryIndex];
        const newCategory = {
            id: categoryID, 
            categoryName: req.body.categoryName || originalCategory.categoryName,
            categoryImage: originalCategory.categoryImage
        }
        DataStore.categories[categoryIndex] = newCategory;
        //res.json(new PublicInfo("Category Updated", 200));
        res.json(PublicInfo.infoUpdated({updatedCategory: newCategory}));
    }
    else {
        //next(new datastoreError("Validation Error", "Category Not Found.", 400));
        next(APIError.errNotFound());
    }
}