import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { CategoryMarketDetail } from "../../../model/shared/categoryMarketDetail";
import { fileMapper } from "../general/static";
import { APIError, PublicInfo } from "../../../model/shared/sysMessages";

export const datastoreGetCategoryMarketDetail: RequestHandler = (req, res, next) => {
    const categoryID = req.params.id;
    const selectedCategory = DataStore.categories.find((element: any) => element.id == categoryID);
    if (selectedCategory) {
        const imageURLs = selectedCategory.categoryImage.map(fileMapper(req.app.get("env")));
        const selectedMarkets = DataStore.markets.filter((item: any) => item.categoryID == categoryID);
       // TO REVISIT:
       // res.json(new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs));
        // res.json(new PublicInfo("Category Market Details...", 200, {
        //     category: new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs)
        // }));
    }
    else {
        res.json(APIError.errNotFound());
    }
};

// From data model import for reference
// export const apiGetCategoryMarketDetail: RequestHandler = (req, res, next) => {
//     const categoryID = req.params.id;
//     db.one("select * from categories where id = ${id}", {id: categoryID})
//         .then((selectedCategory: dbModel.categories) => {
//             if (selectedCategory) {
//                 const catImgNames = selectedCategory.category_image || [];
//                 const imageURLs = catImgNames.map(fileMapper(req.app.get("env")));
//                 db.any("select * from markets where category_id = ${id}", {id: categoryID})
//                     .then((selectedMarkets: dbModel.markets[]) => {
//                         res.json(new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs));
//                     }
//                 )
//                 // res.json(new PublicInfo("Category Market Details...", 200, {
//                 //     category: new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs)
//                 // }));
//             }
//             else {
//                 res.json(APIError.errNotFound());
//             }
//         }
//     );
// };