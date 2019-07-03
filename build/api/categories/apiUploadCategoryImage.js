"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const static_1 = require("../general/static");
const sysMessages_1 = require("../../model/shared/sysMessages");
exports.apiUploadCategoryImage = (req, res, next) => {
    const categoryID = req.params.id;
    const categoryIndex = data_1.DataStore.categories.findIndex((item) => item.id == categoryID);
    if (categoryIndex == -1) {
        next(new sysMessages_1.APIError("Validation Error", "Category Not Found", 400));
    }
    else {
        const upload = static_1.getFileUploader(req.app.get("env"));
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                next(new sysMessages_1.APIError("Validation Error", "File Not Uploaded", 400));
            }
            else {
                data_1.DataStore.categories[categoryIndex].categoryImg.push(req.file.filename);
                res.json(new sysMessages_1.PublicInfo("Category Image Added", 200));
            }
        });
    }
};
