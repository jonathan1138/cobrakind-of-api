import express from "express";
const app = express();
import * as path from "path";
import morgan from "morgan";

import * as bodyparser from "body-parser";
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({extended: true});
const logger = morgan("dev");

import { DataStore } from "./data/data";
import { CustomRequestHandler } from "./model/express";
import { apiGetCategories } from "./api/categories/apiGetCategories";
import { apiCheckCategoryFilters } from "./api/categories/apiCheckCategoryFilters";
import { apiGetCategoryMarketDetail } from "./api/categories/apiGetCategoryMarketDetail";
import { apiCreateCategory } from "./api/categories/apiCreateCategory";
import { apiDeleteCategory } from "./api/categories/apiDeleteCategory";
import { apiUpdateCategory } from "./api/categories/apiUpdateCategory";
import { apiUploadCategoryImage } from "./api/categories/apiUploadCategoryImage";
import { apiDownloadCategoryImage } from "./api/categories/apiDownloadCategoryImage";
import { apiErrorHandler } from "./api/general/errorHandling";
import { APIError } from "./model/shared/sysMessages";
import { dateParam } from "./api/general/requestParams/dateParams";

// Custom Middleware - Authenticator and customUserLogger
// const authenticator: CustomRequestHandler = (req, res, next) => {
//     const username = "Andy123";
//     req.user = username;
//     next();
// };
//  const customUserLogger: CustomRequestHandler = (req, res, next) => {
//      console.log("User: " + req.user + 
//      " - " + new Date() + " - " + 
//      req.method + " Request to " + req.path);
//      next();
//  };
// app.use(authenticator);
// app.use(customUserLogger);

// Example of custom request parameter filtering by defining params - not advised since req params should be entity only
// app.param("fromDate", dateParam);
// app.param("toDate", dateParam);
// app.get("/listings/:fromDate/:toDate", (req, res, next) => res.json(req.params));

app.disable("x-powered-by");

app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE"
    });
    next();
});

app.use(logger);

// JSON only, else, publish error
app.use((req, res, next) => {
    if (req.accepts("application/json")) {
        next();
    } 
    else {
        next(new APIError(
            "Content Type not supported", "This API only supports application/json"
        ,400));
    }
})

// Set image path to static/public/img
app.use("/static", express.static(path.resolve("./", "public", "img")));

// Home
app.get("/", (req, res, next) => {
    res.send("Welcome to a CobraKind of API...");
});

app.get("/categories", apiCheckCategoryFilters, apiGetCategories);

app.post("/categories", jsonParser, apiCreateCategory);

app.post("/categories/:id", apiUploadCategoryImage);

app.delete("/categories/:id", apiDeleteCategory);

app.patch("/categories/:id", jsonParser, apiUpdateCategory);

app.get("/categoryMarketDetail/:id", apiGetCategoryMarketDetail);

app.get("/static/download/:id", apiDownloadCategoryImage);

app.use(apiErrorHandler);

app.listen(process.env.PORT || 8091, () => {{console.log("The Cobra is Alive... running in " + process.env.NODE_ENV + " mode.")}});

