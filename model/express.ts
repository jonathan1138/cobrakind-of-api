import { Request, Response, NextFunction } from "express";
import { PublicInfo } from "../model/shared/sysMessages";
export interface CustomRequest extends Request {
    user?: string;
}

export interface CustomResponse extends Response {
    publicInfo: PublicInfo;
}

export type CustomRequestHandler = (
    req: CustomRequest, 
    res: CustomResponse, 
    next: NextFunction) => any;

export type CustomSuccessHandler = (
    req: CustomRequest, 
    res: CustomResponse, 
    next: NextFunction) => any;