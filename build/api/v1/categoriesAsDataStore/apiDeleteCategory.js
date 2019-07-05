"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const sysMessages_1 = require("../../../model/shared/sysMessages");
exports.apiDeleteCategory = (req, res, next) => {
    const categoryID = req.params.id;
    const categoryIndex = data_1.DataStore.categories.findIndex((item) => item.id == categoryID);
    if (categoryIndex > -1) {
        data_1.DataStore.categories.splice(categoryIndex, 1);
        //res.json(new PublicInfo("Category Deleted", 204));
        res.status(204);
        res.json(sysMessages_1.PublicInfo.infoDeleted());
    }
    else {
        // res.json(PublicError());
        next(sysMessages_1.APIError.errNotFound());
    }
};
