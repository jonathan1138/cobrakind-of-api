import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { Category } from "../../../model/shared/categories";
import { CategoryFilters } from "../../../model/shared/categoryFilters";
import { db } from "../../../db/db";

export const datastoreGetCategories: RequestHandler = (req, res, next) => {
    db.any("select * from categories").then(categories => console.log(categories));
    
    
    const filters = new CategoryFilters(req.query);
    const filteredData = DataStore.categories.filter((item: any) => {
        let conditions = [
            filters.categoryName ? ( item.categoryName == filters.categoryName) : true
        ];
        return conditions.every(value => value == true);
    });
    res.json(filteredData.map((item: any) => new Category(item)));
    // res.json(new PublicInfo("Categories", 200, {
    //     category: DataStore.categories.map((item: any) => new Category(item))
    // }));    
};