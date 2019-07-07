"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datastoreCheckCategoryFilters_1 = require("./datastoreCheckCategoryFilters");
const datastoreGetCategories_1 = require("./datastoreGetCategories");
const datastoreCreateCategory_1 = require("./datastoreCreateCategory");
const datastoreUploadCategoryImage_1 = require("./datastoreUploadCategoryImage");
const datastoreDeleteCategory_1 = require("./datastoreDeleteCategory");
const datastoreUpdateCategory_1 = require("./datastoreUpdateCategory");
const datastoreGetCategoryMarketDetail_1 = require("./datastoreGetCategoryMarketDetail");
const bodyParser_1 = require("../general/bodyParser");
exports.categoryRouter = express_1.Router();
exports.categoryRouter.route("/")
    .get(datastoreCheckCategoryFilters_1.datastoreCheckCategoryFilters, datastoreGetCategories_1.datastoreGetCategories)
    .post(bodyParser_1.jsonParser, datastoreCreateCategory_1.datastoreCreateCategory);
exports.categoryRouter.route("/:id")
    .get(datastoreGetCategoryMarketDetail_1.datastoreGetCategoryMarketDetail)
    .delete(datastoreDeleteCategory_1.datastoreDeleteCategory)
    .post(datastoreUploadCategoryImage_1.datastoreUploadcImg)
    .patch(bodyParser_1.jsonParser, datastoreUpdateCategory_1.datastoreUpdateCategory);
