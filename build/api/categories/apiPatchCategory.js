"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiPatchCategory = (req, res, next) => {
    const categoryID = req.params.id;
    const categoryIndex = data_1.DataStore.categories.findIndex((item) => item.id == categoryID);
    if (categoryIndex > -1) {
        const newCategory = {
            id: categoryID,
            categoryName: req.body.categoryName || "",
            categoryImg: req.body.categoryImg || ""
        };
        data_1.DataStore.categories[categoryIndex] = newCategory;
        res.json({ "status": "success", "message": "Element Updated" });
    }
    else {
        res.json({ "status": "error", "message": "Element not found" });
    }
};
