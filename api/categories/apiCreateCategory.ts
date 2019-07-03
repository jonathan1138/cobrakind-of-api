import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";
import { APIError, PublicInfo } from "../../model/shared/sysMessages";

export const apiCreateCategory: RequestHandler = (req, res, next) => {
    const requiredFields = ["categoryName"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if(!requiredFields.every(field => givenFields.includes(field)) ) {
        return next(APIError.errMissingBody());

    }
    const newCategory = {
        id: uuid(), 
        categoryName: req.body.categoryName || "",
        categoryImg: []
    }

    DataStore.categories.push(newCategory);
    res.json(PublicInfo.infoCreated({newCategory: newCategory}));
};