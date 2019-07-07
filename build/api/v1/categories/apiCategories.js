"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiCheckCategoryFilters_1 = require("./apiCheckCategoryFilters");
const apiGetCategories_1 = require("./apiGetCategories");
const apiCreateCategory_1 = require("./apiCreateCategory");
const apiUploadCategoryImage_1 = require("./apiUploadCategoryImage");
const apiDeleteCategory_1 = require("./apiDeleteCategory");
const apiUpdateCategory_1 = require("./apiUpdateCategory");
const apiGetCategoryMarketDetail_1 = require("./apiGetCategoryMarketDetail");
const bodyParser_1 = require("../general/bodyParser");
const caching_1 = require("../general/caching");
const apiDeleteCategoryImage_1 = require("./apiDeleteCategoryImage");
exports.categoryRouter = express_1.Router();
exports.categoryRouter.route("/")
    .get(caching_1.cacheCheck, apiCheckCategoryFilters_1.apiCheckCategoryFilters, apiGetCategories_1.apiGetCategories)
    .post(bodyParser_1.jsonParser, apiCreateCategory_1.apiCreateCategory);
exports.categoryRouter.route("/:id")
    .get(apiGetCategoryMarketDetail_1.apiGetCategoryMarketDetail)
    .delete(apiDeleteCategory_1.apiDeleteCategory)
    .post(apiUploadCategoryImage_1.apiUploadCategoryImage)
    .patch(bodyParser_1.jsonParser, apiUpdateCategory_1.apiUpdateCategory);
exports.categoryRouter.route("/deleteCategoryImage/:id")
    .delete(apiCheckCategoryFilters_1.apiCheckCategoryFilters, apiDeleteCategoryImage_1.apiDeleteCategoryImage);
