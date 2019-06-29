"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiDeleteCategory = (req, res, next) => {
    const categoryID = req.params.id;
    const categoryIndex = data_1.DataStore.categories.findIndex((item) => item.id == categoryID);
    if (categoryIndex > -1) {
        data_1.DataStore.categories.splice(categoryIndex, 1);
        res.json({ "status": "success", "message": "Element removed" });
    }
    else {
        res.json({ "status": "error", "message": "Element not found" });
    }
};
