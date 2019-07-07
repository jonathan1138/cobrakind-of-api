import express = require("express");
import path from "path";

import { Router } from "express";
import { logger } from "./general/logging";
import { apiCors } from "./general/cors";
import { apiValidation } from "./general/validation";
import { userRouter } from "./users/apiUsers";
import { categoryRouter } from "./categories/apiCategories";
import { apiDownloadcImg } from "./categories/apiDownloadCategoryImage";
import { apiErrorHandler } from "./general/errorHandling";
import { urlEncodedParser, jsonParser } from "./general/bodyParser";
import { apiTokenSignin } from "./auth/apiTokenSignin";
import { apiSessionVerify } from "./auth/apiSessionVerify";
import { apiLocalSignin } from "./auth/apiLocalSignin";
import { apiLocalSignup } from "./auth/apiLocalSignup";

export let routerV1 = Router();

const rateLimit = require("express-rate-limit");
 // Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);
 const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes 15* 60 * 1000
  max: 100 // limit each IP to 100 requests per windowMs
});

 //  apply to all requests
routerV1.use(limiter);

// Home
routerV1.get("/", (req, res, next) => {
    res.send("Welcome to a CobraKind of API...");
});


routerV1.use(logger);
routerV1.use(apiCors);
routerV1.use(apiValidation);

routerV1.use(apiSessionVerify);

// Set image path to static/public/img
routerV1.use("/static", express.static(path.resolve("./", "public", "img")));

routerV1.use("/users", userRouter);

routerV1.use("/categories", categoryRouter);

routerV1.post("/tokensignin", urlEncodedParser, apiTokenSignin);

routerV1.post("/localsignup", jsonParser, apiLocalSignup);

routerV1.post("/localsignin", jsonParser, apiLocalSignin);

routerV1.get("/static/download/:id", apiDownloadcImg);

routerV1.use(apiErrorHandler);
