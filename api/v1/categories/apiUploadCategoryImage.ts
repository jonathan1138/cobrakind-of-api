import { RequestHandler } from "express";
import { getFileUploader } from "../general/static";
import { APIError, PublicInfo } from "../../../model/shared/sysMessages";
import { db,pgp } from "../../../db/db";

export const apiUploadCategoryImage: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const upload = getFileUploader(req.app.get("env"));
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            next(APIError.errServerError());
        } else {
            console.log(req.file);
            const sql = "update categories\
                        set category_image = array_append(category_image, ${file})\
                        where id = ${id}";
            db.none(sql, {file: req.file.filename, id: categoryID})
                .then( () => {
                    res.json(PublicInfo.infoCreated({uploadedFile: req.file.filename}));
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
            )
        };
    });
}