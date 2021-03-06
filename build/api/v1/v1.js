"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const logging_1 = require("./general/logging");
const cors_1 = require("./general/cors");
const validation_1 = require("./general/validation");
const apiUsers_1 = require("./users/apiUsers");
const apiCategories_1 = require("./categories/apiCategories");
const apiDownloadCategoryImage_1 = require("./categories/apiDownloadCategoryImage");
const errorHandling_1 = require("./general/errorHandling");
const bodyParser_1 = require("./general/bodyParser");
const apiTokenSignin_1 = require("./auth/apiTokenSignin");
const apiSessionVerify_1 = require("./auth/apiSessionVerify");
const apiLocalSignin_1 = require("./auth/apiLocalSignin");
const apiLocalSignup_1 = require("./auth/apiLocalSignup");
exports.routerV1 = express_1.Router();
const rateLimit = require("express-rate-limit");
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100 // limit each IP to 100 requests per windowMs
});
//  apply to all requests
exports.routerV1.use(limiter);
// Home
exports.routerV1.get("/", (req, res, next) => {
    res.send("Welcome to a CobraKind of API...");
});
exports.routerV1.use(logging_1.logger);
exports.routerV1.use(cors_1.apiCors);
exports.routerV1.use(validation_1.apiValidation);
exports.routerV1.use(apiSessionVerify_1.apiSessionVerify);
// Set image path to static/public/img
exports.routerV1.use("/static", express.static(path_1.default.resolve("./", "public", "img")));
exports.routerV1.use("/users", apiUsers_1.userRouter);
exports.routerV1.use("/categories", apiCategories_1.categoryRouter);
exports.routerV1.post("/tokensignin", bodyParser_1.urlEncodedParser, apiTokenSignin_1.apiTokenSignin);
exports.routerV1.post("/localsignup", bodyParser_1.jsonParser, apiLocalSignup_1.apiLocalSignup);
exports.routerV1.post("/localsignin", bodyParser_1.jsonParser, apiLocalSignin_1.apiLocalSignin);
exports.routerV1.get("/static/download/:id", apiDownloadCategoryImage_1.apiDownloadcImg);
exports.routerV1.use(errorHandling_1.apiErrorHandler);
