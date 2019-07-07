import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/sysMessages";
import { db,pgp } from "../../../db/db";
import { CategoryFilters } from "../../../model/shared/categoryFilters";

export const apiDeleteCategoryImage: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const cImg = new CategoryFilters(req.query).cImg;   

    console.log(cImg);

    if (!cImg || !categoryID) {
        next(APIError.errMissingBody());
    } else {
        const sql = "update categories\
        set category_image = array_remove(category_image, ${cImg})\
        where id = ${id}";
        db.none(sql, {cImg: req.query.cImg, id: categoryID})
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