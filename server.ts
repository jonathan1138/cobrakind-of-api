import express from "express";
const app = express();

import * as bodyparser from "body-parser";
const jsonParser = bodyparser.json();

import { DataStore } from "./data/data";
import { apiGetCategories } from "./api/categories/apiGetCategories";
import { apiGetCategoryMarketDetail } from "./api/categories/apiGetCategoryMarketDetail";
import { apiCreateCategory } from "./api/categories/apiCreateCategory";
import { apiDeleteCategory } from "./api/categories/apiDeleteCategory";
import { apiUpdateCategory } from "./api/categories/apiUpdateCategory";

app.get("/", (req, res, next) => {
    res.send("Welcome to a CobraKind of API...");
});

app.get("/categories", apiGetCategories);

app.get("/categories/:id", apiGetCategoryMarketDetail);

app.post("/categories", jsonParser, apiCreateCategory);

app.delete("/categories/:id", apiDeleteCategory);

app.patch("/categories/:id", jsonParser, apiUpdateCategory);

app.listen(process.env.PORT || 8091, () => {{console.log("The Cobra is Alive...")}});

