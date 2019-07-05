import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/sysMessages";
import { db,pgp } from "../../../db/db";

export const apiDeleteCategory: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    db.none("delete from categories where id = ${id}", {id: categoryID})
        .then( () => {
            res.status(204).json(PublicInfo.infoDeleted());
            //res.json(PublicInfo.infoDeleted());
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