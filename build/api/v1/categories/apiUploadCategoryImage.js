"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const static_1 = require("../general/static");
const sysMessages_1 = require("../../../model/shared/sysMessages");
const db_1 = require("../../../db/db");
exports.apiUploadCategoryImage = (req, res, next) => {
    const categoryID = req.params.id;
    const upload = static_1.getFileUploader(req.app.get("env"));
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            next(sysMessages_1.APIError.errServerError());
        }
        else {
            console.log(req.file);
            const sql = "update categories\
                        set category_image = array_append(category_image, ${file})\
                        where id = ${id}";
            db_1.db.none(sql, { file: req.file.filename, id: categoryID })
                .then(() => {
                res.json(sysMessages_1.PublicInfo.infoCreated({ uploadedFile: req.file.filename }));
            })
                .catch(err => {
                if (err instanceof db_1.pgp.errors.QueryResultError) {
                    next(sysMessages_1.APIError.errNotFound());
                }
                else {
                    console.log(err);
                    next(sysMessages_1.APIError.errInvalidQueryParameter());
                }
            });
        }
        ;
    });
};
