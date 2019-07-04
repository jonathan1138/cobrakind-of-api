"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
exports.logger = morgan_1.default("dev");
//import { CustomRequestHandler } from "../../model/express";
// Custom Middleware - Authenticator and customUserLogger from server.ts
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
