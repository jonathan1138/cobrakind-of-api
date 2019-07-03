import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { Category } from "../../model/shared/categories";
import { PublicInfo } from "../../model/shared/sysMessages";

export const apiGetCategories: RequestHandler = (req, res, next) => {
    
    //res.json(DataStore.categories.map((item: any) => new Category(item)));
    res.json(new PublicInfo("Categories", 200, {
        category: DataStore.categories.map((item: any) => new Category(item))
    }));
};