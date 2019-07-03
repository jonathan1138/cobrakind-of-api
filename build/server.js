"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const bodyparser = __importStar(require("body-parser"));
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({ extended: true });
const apiGetCategories_1 = require("./api/categories/apiGetCategories");
const apiGetCategoryMarketDetail_1 = require("./api/categories/apiGetCategoryMarketDetail");
const apiCreateCategory_1 = require("./api/categories/apiCreateCategory");
const apiDeleteCategory_1 = require("./api/categories/apiDeleteCategory");
const apiUpdateCategory_1 = require("./api/categories/apiUpdateCategory");
const apiUploadCategoryImage_1 = require("./api/categories/apiUploadCategoryImage");
const errorHandling_1 = require("./api/general/errorHandling");
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const logger = morgan_1.default("dev");
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
app.use("/static", express_1.default.static(path_1.default.resolve("./", "public", "img")));
app.get("/", (req, res, next) => {
    res.send("Welcome to a CobraKind of API...");
});
app.get("/categories", apiGetCategories_1.apiGetCategories);
app.post("/categories", jsonParser, apiCreateCategory_1.apiCreateCategory);
app.post("/categories/:id", apiUploadCategoryImage_1.apiUploadCategoryImage);
app.delete("/categories/:id", apiDeleteCategory_1.apiDeleteCategory);
app.patch("/categories/:id", jsonParser, apiUpdateCategory_1.apiUpdateCategory);
app.get("/categoryMarketDetail/:id", apiGetCategoryMarketDetail_1.apiGetCategoryMarketDetail);
app.use(errorHandling_1.apiErrorHandler);
app.listen(process.env.PORT || 8091, () => { {
    console.log("The Cobra is Alive... running in " + process.env.NODE_ENV + " mode.");
} });
