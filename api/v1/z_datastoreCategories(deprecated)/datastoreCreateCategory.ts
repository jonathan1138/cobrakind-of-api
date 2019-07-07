import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../../data/data";
import { APIError, PublicInfo } from "../../../model/shared/sysMessages";

export const datastoreCreateCategory: RequestHandler = (req, res, next) => {
    const requiredFields = ["cName"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if(!requiredFields.every(field => givenFields.includes(field)) ) {
        return next(APIError.errMissingBody());
    }
    const newCategory = {
        id: uuid(), 
        cName: req.body.cName || "",
        cImg: []
    }
    DataStore.categories.push(newCategory);
    res.status(201);
    res.json(PublicInfo.infoCreated({newCategory: newCategory}));
};