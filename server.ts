import express from "express";
const app = express();

import * as bodyparser from "body-parser";
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({extended: true});

import { DataStore } from "./data/data";
import { apiGetCategories } from "./api/categories/apiGetCategories";
import { apiGetCategoryMarketDetail } from "./api/categories/apiGetCategoryMarketDetail";
import { apiCreateCategory } from "./api/categories/apiCreateCategory";
import { apiDeleteCategory } from "./api/categories/apiDeleteCategory";
import { apiUpdateCategory } from "./api/categories/apiUpdateCategory";
import { apiUploadCategoryImage } from "./api/categories/apiUploadCategoryImage";
import { apiErrorHandler } from "./api/general/errorHandling";

import { CustomRequestHandler } from "./model/express";
import path from "path";

import morgan from "morgan";
const logger = morgan("dev");

// Custom Middleware
// const authenticator: CustomRequestHandler = (req, res, next) => {
//     const username = "Andy123";
//     req.user = username;
//     next();
// };

// const logger: CustomRequestHandler = (req, res, next) => {
//     console.log("User: " + req.user + 
//     " - " + new Date() + " - " + 
//     req.method + " Request to " + req.path);
//     next();
// };

// app.use(authenticator);
app.use(logger);
app.use("/static", express.static(path.resolve("./", "public", "img")));

app.get("/", (req, res, next) => {
    res.send("Welcome to a CobraKind of API...");
});

app.get("/categories", apiGetCategories);

app.post("/categories", jsonParser, apiCreateCategory);

app.post("/categories/:id", apiUploadCategoryImage);

app.delete("/categories/:id", apiDeleteCategory);

app.patch("/categories/:id", jsonParser, apiUpdateCategory);

app.get("/categoryMarketDetail/:id", apiGetCategoryMarketDetail);

app.use(apiErrorHandler);

app.listen(process.env.PORT || 8091, () => {{console.log("The Cobra is Alive... running in " + process.env.NODE_ENV + " mode.")}});

