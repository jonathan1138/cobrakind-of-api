import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { APIError, PublicInfo } from "../../../model/shared/sysMessages";
import * as dbModel from "../../../db/model_generated";
import { db,pgp } from "../../../db/db";

export const apiCreateCategory: RequestHandler = (req, res, next) => {
    const requiredFields = ["categoryName"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if(!requiredFields.every(field => givenFields.includes(field)) ) {
        return next(APIError.errMissingBody());
    }
    const newCategory: dbModel.categories = {
        id: uuid(), 
        category_name: req.body.categoryName || "",
        category_image: []
    }
    db.none(pgp.helpers.insert(newCategory, undefined, "categories"))
        .then( () => {
            res.status(201).json(PublicInfo.infoCreated({newCategory: newCategory}));
        })
        .catch(err => {
            if (err instanceof pgp.errors.QueryResultError) {
                next(APIError.errNotFound());
            } 
            else {
                console.log(err);
                next(APIError.errInvalidQueryParameter());
            }            
        }
    );
};