"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const data_1 = require("../../data/data");
const sysMessages_1 = require("../../model/shared/sysMessages");
exports.apiCreateCategory = (req, res, next) => {
    const requiredFields = ["categoryName"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every(field => givenFields.includes(field))) {
        return next(sysMessages_1.APIError.errMissingBody());
    }
    const newCategory = {
        id: v4_1.default(),
        categoryName: req.body.categoryName || "",
        categoryImg: []
    };
    data_1.DataStore.categories.push(newCategory);
    res.json(sysMessages_1.PublicInfo.infoCreated({ newCategory: newCategory }));
};
