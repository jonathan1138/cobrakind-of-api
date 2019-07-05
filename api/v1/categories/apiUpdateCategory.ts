import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/sysMessages";
const caseConverter = require("change-case-object");
import { db,pgp } from "../../../db/db";

export const apiUpdateCategory: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const data = caseConverter.snakeCase(req.body);
    const sql = pgp.helpers.update(data, undefined, "categories") + " where id = ${id}"; 
     db.none(sql, {id: categoryID}).then( () => {
        res.json(PublicInfo.infoUpdated({updatedData: data}));
    })
    .catch(err => {
        if (err instanceof pgp.errors.QueryResultError) {
            next(APIError.errNotFound());
        } 
        else {
            console.log(err);
            next(APIError.errInvalidQueryParameter());
        }            
    });
};