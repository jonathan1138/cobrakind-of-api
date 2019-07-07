import { Router } from "express";
import { apiCheckCategoryFilters } from "./apiCheckCategoryFilters";
import { apiGetCategories } from "./apiGetCategories";
import { apiCreateCategory } from "./apiCreateCategory";
import { apiUploadCategoryImage } from "./apiUploadCategoryImage";
import { apiDeleteCategory } from "./apiDeleteCategory";
import { apiUpdateCategory } from "./apiUpdateCategory";
import { apiGetCategoryMarketDetail } from "./apiGetCategoryMarketDetail";
import { apiDownloadCategoryImage } from "./apiDownloadCategoryImage";
import { jsonParser } from "../general/bodyParser";
import { cacheCheck } from "../general/caching";
import { apiDeleteCategoryImage } from "./apiDeleteCategoryImage";


export let categoryRouter = Router();

categoryRouter.route("/")
    .get(cacheCheck, apiCheckCategoryFilters, apiGetCategories)
    .post(jsonParser, apiCreateCategory);

categoryRouter.route("/:id")
    .get(apiGetCategoryMarketDetail)
    .delete(apiDeleteCategory)
    .post(apiUploadCategoryImage)
    .patch(jsonParser, apiUpdateCategory);

categoryRouter.route("/deleteCategoryImage/:id")
    .delete(apiCheckCategoryFilters, apiDeleteCategoryImage);
