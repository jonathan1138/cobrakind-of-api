import morgan from "morgan";
export const logger = morgan("dev");

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