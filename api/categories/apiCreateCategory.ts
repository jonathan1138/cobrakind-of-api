import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";
import { APIError, PublicInfo } from "../../model/shared/sysMessages";

export const apiCreateCategory: RequestHandler = (req, res, next) => {
    const requiredFields = ["categoryName"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if(!requiredFields.every(field => givenFields.includes(field)) ) {
        return next(new APIError("Data Missing", "Not all required fields supplied", 400));

    }
    const newCategory = {
        id: uuid(), 
        categoryName: req.body.categoryName || "",
        categoryImg: []
    }

    DataStore.categories.push(newCategory);
    res.json(new PublicInfo("Catgory Added", 200, {category: newCategory}));
};