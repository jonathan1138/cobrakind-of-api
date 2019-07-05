import express = require("express");
import path from "path";

import { Router } from "express";
import { logger } from "./general/logging";
import { apiCors } from "./general/cors";
import { apiValidation } from "./general/validation";
import { userRouter } from "./users/apiUsers";
import { categoryRouter } from "./categories/apiCategories";
import { apiDownloadCategoryImage } from "./categories/apiDownloadCategoryImage";
import { apiErrorHandler } from "./general/errorHandling";
import { urlEncodedParser } from "./general/bodyParser";
import { apiTokenSignin } from "./auth/apiTokenSignin";
import { apiSessionVerify } from "./auth/apiSessionVerify";

export let routerV1 = Router();

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

routerV1.get("/static/download/:id", apiDownloadCategoryImage);

routerV1.use(apiErrorHandler);
