import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

import { Category } from "../../model/shared/categories";

export const apiGetCategories: RequestHandler = (req, res, next) => {
    res.json(DataStore.categories.map((item: any) => new Category(item)));
};