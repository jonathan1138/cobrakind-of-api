"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiCheckCategoryFilters_1 = require("./apiCheckCategoryFilters");
const apiGetCategories_1 = require("./apiGetCategories");
const apiCreateCategory_1 = require("./apiCreateCategory");
const apiUploadcImg_1 = require("./apiUploadcImg");
const apiDeleteCategory_1 = require("./apiDeleteCategory");
const apiUpdateCategory_1 = require("./apiUpdateCategory");
const apiGetCategoryMarketDetail_1 = require("./apiGetCategoryMarketDetail");
const bodyParser_1 = require("../general/bodyParser");
exports.categoryRouter = express_1.Router();
exports.categoryRouter.route("/")
    .get(apiCheckCategoryFilters_1.apiCheckCategoryFilters, apiGetCategories_1.apiGetCategories)
    .post(bodyParser_1.jsonParser, apiCreateCategory_1.apiCreateCategory);
exports.categoryRouter.route("/:id")
    .get(apiGetCategoryMarketDetail_1.apiGetCategoryMarketDetail)
    .delete(apiDeleteCategory_1.apiDeleteCategory)
    .post(apiUploadcImg_1.apiUploadcImg)
    .patch(bodyParser_1.jsonParser, apiUpdateCategory_1.apiUpdateCategory);
