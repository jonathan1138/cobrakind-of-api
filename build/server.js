"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/", (req, res, next) => {
    res.send("Cobra Kind API");
});
app.get("/categories", (req, res, next) => {
    res.send("Get a list of Categories...");
});
app.post("/categories", (req, res, next) => {
    res.send("Add a new category...");
});
app.listen(process.env.PORT || 8091, () => { {
    console.log("The Cobra is Alive...");
} });
