"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const static_1 = require("../general/static");
const sysMessages_1 = require("../../model/shared/sysMessages");
exports.apiUploadcImg = (req, res, next) => {
    const categoryID = req.params.id;
    const categoryIndex = data_1.DataStore.categories.findIndex((item) => item.id == categoryID);
    if (categoryIndex == -1) {
        next(sysMessages_1.APIError.errNotFound());
    }
    else {
        const upload = static_1.getFileUploader(req.app.get("env"));
        console.log(upload);
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                next(sysMessages_1.APIError.errServerError());
            }
            else {
                data_1.DataStore.categories[categoryIndex].categoryImg.push(req.file.filename);
                res.json(sysMessages_1.PublicInfo.infoCreated({ uploadedFile: req.file.filename }));
            }
        });
    }
};
