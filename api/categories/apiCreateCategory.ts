import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";

export const apiCreateCategory: RequestHandler = (req, res, next) => {
    const newCategory = {
        id: uuid(), 
        categoryName: req.body.categoryName || "",
        categoryImg: req.body.categoryImg || ""
    }

    DataStore.categories.push(newCategory);
    res.send("New Category Added.");
};