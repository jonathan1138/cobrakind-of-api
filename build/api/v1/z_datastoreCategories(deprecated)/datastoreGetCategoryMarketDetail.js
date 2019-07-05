"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const static_1 = require("../general/static");
const sysMessages_1 = require("../../../model/shared/sysMessages");
exports.datastoreGetCategoryMarketDetail = (req, res, next) => {
    const categoryID = req.params.id;
    const selectedCategory = data_1.DataStore.categories.find((element) => element.id == categoryID);
    if (selectedCategory) {
        const imageURLs = selectedCategory.categoryImage.map(static_1.fileMapper(req.app.get("env")));
        const selectedMarkets = data_1.DataStore.markets.filter((item) => item.categoryID == categoryID);
        // TO REVISIT:
        // res.json(new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs));
        // res.json(new PublicInfo("Category Market Details...", 200, {
        //     category: new CategoryMarketDetail(selectedCategory, selectedMarkets, imageURLs)
        // }));
    }
    else {
        res.json(sysMessages_1.APIError.errNotFound());
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
