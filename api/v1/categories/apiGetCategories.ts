import { RequestHandler } from "express";
import { Category } from "../../../model/shared/categories";
import { CategoryFilters } from "../../../model/shared/categoryFilters";
import { db } from "../../../db/db";
import * as dbModel from "../../../db/model_generated";

export const apiGetCategories: RequestHandler = (req, res, next) => {
    const filters = new CategoryFilters(req.query);
    db.any("select * from categories where ${condition:raw}", 
        {condition: filters.getCondition()}).then((categories: dbModel.categories[]) => {
            res.json(categories.map((item: any) => new Category(item)));
            // res.json(new PublicInfo("Categories", 200, {
            //     category: DataStore.categories.map((item: any) => new Category(item))
            // })); 
        }
    );
};