import uuid from "uuid/v4";
import { APIError, PublicInfo } from "../../../model/shared/sysMessages";
import * as dbModel from "../../../db/model_generated";
import { db,pgp } from "../../../db/db";
import { CustomRequestHandler } from "../../../model/express";

export const apiCreateCategory: CustomRequestHandler = (req, res, next) => {
    const requiredFields = ["categoryName"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if(!requiredFields.every(field => givenFields.includes(field)) ) {
        return next(APIError.errMissingBody());
    }

    if (!req.user) {
        next(APIError.errUnauthorizedAccess());
    }

    const receivedCatName = req.body.categoryName;
    console.log(req.body.categoryName);

    db.one("select * from categories where category_name = ${category_name} LIMIT 1", {category_name: receivedCatName})
        .then((category_name: dbModel.categories) => {
            next(APIError.errValueExists());
        })
        .catch(err=> {
            console.log(err);

            const newCategory: dbModel.categories = {
                id: uuid(), 
                category_name: req.body.categoryName || "",
                category_image: [],
                user_id: req.user!.id
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
        })
        .catch(err => {
            next(APIError.errSessionExpired());
        }
    );
};