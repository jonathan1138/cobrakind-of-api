import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { Category } from "../../../model/shared/categories";
import { PublicInfo } from "../../../model/shared/sysMessages";
import { CategoryFilters } from "../../../model/shared/categoryFilters";

export const apiGetCategories: RequestHandler = (req, res, next) => {
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