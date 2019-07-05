import { Request, Response, NextFunction } from "express";
import { PublicInfo } from "../model/shared/sysMessages";
import * as dbModel from "../db/model_generated";
export interface CustomRequest extends Request {
    user?: dbModel.users;
}

export interface CustomResponse extends Response {

}

export type CustomRequestHandler = (
    req: CustomRequest, 
    res: CustomResponse, 
    next: NextFunction) => any;

export type CustomSuccessHandler = (
    req: CustomRequest, 
    res: CustomResponse, 
    next: NextFunction) => any;