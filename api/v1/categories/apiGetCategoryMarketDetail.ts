import { RequestHandler } from "express";
import { CategoryMarketDetail } from "../../../model/shared/categoryMarketDetail";
import { fileMapper } from "../general/static";
import { APIError, PublicInfo } from "../../../model/shared/sysMessages";
import * as dbModelExt from "../../../db/model_extensions";
import { db, pgp } from "../../../db/db";
import { Category } from "../../../model/shared/categories";

export const apiGetCategoryMarketDetail: RequestHandler = (req, res, next) => {
    const categoryID = req.params.id;
    db.one("select c.*,\
            (select json_agg(markets)\
                from markets where category_id = ${id}\
            ) as markets \
            from categories as c\
            where c.id = ${id}",
            {id: categoryID})
        .then((data: dbModelExt.categoriesWithMarkets) => {
            const categoryImgNames = data.category_image || [];
            const categoryImgURLs = categoryImgNames.map(fileMapper(req.app.get("env")));
            res.json(new CategoryMarketDetail(data, categoryImgURLs));
        })
        .catch(err => {
            if (err instanceof pgp.errors.QueryResultError) {
                next(APIError.errNotFound());
            } 
            else {
                console.log(err);
                next(APIError.errInvalidQueryParameter());
            }            
        }
    );
};