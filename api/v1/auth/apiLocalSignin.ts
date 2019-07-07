import { RequestHandler } from "express";
import * as bcrypt from "bcrypt";
import { DataStore } from "../../../data/data";

export const apiLocalSignin: RequestHandler = (req, res, next) => {
    const userAccount = DataStore.UserAccounts.find(acc => {
        return acc.email == req.body.email;
    });
    if (userAccount) {
        bcrypt.compare(req.body.password, userAccount.password).then(match => {
            if (match) {
                res.send("User logged in!")
            }
            else {
                res.send("Login Failed!");
            }
        }) 
    }
    else {
        res.send("Login Failed!");
    }
};