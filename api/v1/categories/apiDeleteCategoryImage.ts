import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/sysMessages";
import { db,pgp } from "../../../db/db";
import { CategoryFilters } from "../../../model/shared/categoryFilters";

export const apiDeleteCategoryImage: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const categoryImage = new CategoryFilters(req.query).categoryImage;   
    if (!categoryImage || !categoryID) {
        next(APIError.errMissingBody());
    } else {
        const sql = "update categories\
        set category_image = array_remove(category_image, ${categoryImage})\
        where id = ${id}";
        db.none(sql, {categoryImage: req.query.categoryImage, id: categoryID})
                .then( () => {
                    res.status(204).json(PublicInfo.infoDeleted());
                })
                .catch(err => {
                    if (err instanceof pgp.errors.QueryResultError) {
                    next(APIError.errNotFound());
                } 
                else {
                    next(APIError.errInvalidQueryParameter());
                }            
            }
        );
    }
};