import { Router } from "express";
import { datastoreCheckCategoryFilters } from "./datastoreCheckCategoryFilters";
import { datastoreGetCategories } from "./datastoreGetCategories";
import { datastoreCreateCategory } from "./datastoreCreateCategory";
import { datastoreUploadcImg } from "./datastoreUploadCategoryImage";
import { datastoreDeleteCategory } from "./datastoreDeleteCategory";
import { datastoreUpdateCategory } from "./datastoreUpdateCategory";
import { datastoreGetCategoryMarketDetail } from "./datastoreGetCategoryMarketDetail";
import { datastoreDownloadcImg } from "./datastoreDownloadCategoryImage";
import { jsonParser } from "../general/bodyParser";


export let categoryRouter = Router();

categoryRouter.route("/")
    .get(datastoreCheckCategoryFilters, datastoreGetCategories)
    .post(jsonParser, datastoreCreateCategory);

categoryRouter.route("/:id")
    .get(datastoreGetCategoryMarketDetail)
    .delete(datastoreDeleteCategory)
    .post(datastoreUploadcImg)
    .patch(jsonParser, datastoreUpdateCategory);



