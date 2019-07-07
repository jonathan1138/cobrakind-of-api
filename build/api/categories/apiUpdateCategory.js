"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const sysMessages_1 = require("../../model/shared/sysMessages");
exports.apiUpdateCategory = (req, res, next) => {
    const categoryID = req.params.id;
    const categoryIndex = data_1.DataStore.categories.findIndex((item) => item.id == categoryID);
    if (categoryIndex > -1) {
        const originalCategory = data_1.DataStore.categories[categoryIndex];
        const newCategory = {
            id: categoryID,
            cName: req.body.cName || originalCategory.cName,
            categoryImg: originalCategory.categoryImg
        };
        data_1.DataStore.categories[categoryIndex] = newCategory;
        //res.json(new PublicInfo("Category Updated", 200));
        res.json(sysMessages_1.PublicInfo.infoUpdated({ updatedCategory: newCategory }));
    }
    else {
        //next(new APIError("Validation Error", "Category Not Found.", 400));
        next(sysMessages_1.APIError.errNotFound());
    }
};
