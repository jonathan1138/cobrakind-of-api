import { RequestHandler } from "express";
import multer from "multer";
import path from "path";
import uuid from "uuid/v4";

export function getStaticHome(env: string) {
    switch(env) {
        case "development": 
            return "http://localhost:8091/v1/static/";
        case "productioon": 
        //...CDN...
    }
}

export function fileMapper(env: string): (fileName: string) => string {
    return (filename) => getStaticHome(env) + filename;
}

export function getFileUploader(env: string): RequestHandler {
    switch(env) {
        case "development":
            const fileID = uuid();
            const fileStore = multer.diskStorage({
                destination: function (req, file, callback) {
                    callback(null, path.resolve("./", "public", "img") );
                },
                filename: function (req, file, callback) {
                    const fileExt = path.extname(file.originalname);
                    const yesStr = ".jpg";
                    console.log(fileExt + " " + yesStr);
                    console.log(fileExt.localeCompare(yesStr));
                    callback(null, fileID + path.extname(file.originalname));
                }
            });
            return multer({storage: fileStore}).single("file");
        case "production":
            return (req, res, next) => { next()}
        default:
            return (req, res, next) => { next()}
    }
}