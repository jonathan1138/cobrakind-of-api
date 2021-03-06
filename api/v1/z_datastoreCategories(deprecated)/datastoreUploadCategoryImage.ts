import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { getFileUploader } from "../general/static";
import { APIError, PublicInfo } from "../../../model/shared/sysMessages";

export const datastoreUploadcImg: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const categoryIndex = DataStore.categories.findIndex((item: any) => item.id == categoryID);
    if (categoryIndex == -1) {
        next(APIError.errNotFound());
    }
    else {
        const upload = getFileUploader(req.app.get("env"));
        console.log(upload);
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                next(APIError.errServerError());
            } else {
                DataStore.categories[categoryIndex].cImg.push(req.file.filename);
                res.json(PublicInfo.infoCreated({uploadedFile: req.file.filename}));
            }
        });
    }
}