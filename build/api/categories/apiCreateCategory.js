"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const data_1 = require("../../data/data");
exports.apiCreateCategory = (req, res, next) => {
    const newCategory = {
        id: v4_1.default(),
        categoryName: req.body.categoryName || "",
        categoryImg: req.body.categoryImg || ""
    };
    data_1.DataStore.categories.push(newCategory);
    res.send("New Category Added.");
};
