import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { CategoryMarketDetail } from "../../../model/shared/categoryMarketDetail";
import { fileMapper } from "../general/static";
import { APIError, PublicInfo } from "../../../model/shared/sysMessages";
import * as dbModel from "../../../db/model_generated";
import { db } from "../../../db/db";

export const apiGetCategoryMarketDetail: RequestHandler = (req, res, next) => {
    const categoryID = req.params.id;
    db.one("select * from categories where id = ${id}", {id: categoryID})
        .then((selectedCategory: dbModel.categories) => {
            if (selectedCategory) {
                const catImgNames = selectedCategory.category_image || [];
                const imageURLs = catImgNames.map(fileMapper(req.app.get("env")));
                db.any("select * from markets where category_id = ${id}", {id: categoryID})
                    .then((selectedMarkets: dbModel.markets[]) => {
                        res.json(new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs));
                    }
                )
                // res.json(new PublicInfo("Category Market Details...", 200, {
                //     category: new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs)
                // }));
            }
            else {
                res.json(APIError.errNotFound());
            }
        });
};