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
const apiGetCategories_1 = require("./api/categories/apiGetCategories");
const apiGetCategoryMarketDetail_1 = require("./api/categories/apiGetCategoryMarketDetail");
const apiCreateCategory_1 = require("./api/categories/apiCreateCategory");
const apiDeleteCategory_1 = require("./api/categories/apiDeleteCategory");
const apiUpdateCategory_1 = require("./api/categories/apiUpdateCategory");
const authenticator = (req, res, next) => {
    const username = "Andy123";
    req.user = username;
    next();
};
const logger = (req, res, next) => {
    console.log("User: " + req.user +
        " - " + new Date() + " - " +
        req.method + " Request to " + req.path);
    next();
};
app.use(authenticator);
app.use(logger);
app.get("/", (req, res, next) => {
    res.send("Welcome to a CobraKind of API...");
});
app.get("/categories", apiGetCategories_1.apiGetCategories);
app.get("/categories/:id", apiGetCategoryMarketDetail_1.apiGetCategoryMarketDetail);
app.post("/categories", jsonParser, apiCreateCategory_1.apiCreateCategory);
app.delete("/categories/:id", apiDeleteCategory_1.apiDeleteCategory);
app.patch("/categories/:id", jsonParser, apiUpdateCategory_1.apiUpdateCategory);
app.listen(process.env.PORT || 8091, () => { {
    console.log("The Cobra is Alive...");
} });
