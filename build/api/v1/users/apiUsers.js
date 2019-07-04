"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiDeleteUser_1 = require("./apiDeleteUser");
const apiAddUser_1 = require("./apiAddUser");
const apiGetUserDetail_1 = require("./apiGetUserDetail");
const apiUpdateUser_1 = require("./apiUpdateUser");
exports.userRouter = express_1.Router();
exports.userRouter.route("/:id")
    .get(apiGetUserDetail_1.apiGetUserDetail)
    .delete(apiDeleteUser_1.apiDeleteUser)
    .patch(apiUpdateUser_1.apiUpdateUser);
exports.userRouter.post("/", apiAddUser_1.apiAddUser);
