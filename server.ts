import express from "express";
const app = express();

app.get("/", (req, res, next) => {
    res.send("Cobra Kind of API");
});

app.get("/categories", (req, res, next) => {
    res.send("Get a list of Categories...");
});

app.post("/categories", (req,res,next) => {
    res.send("Add a new category...");
});

app.listen(process.env.PORT || 8091, () => {{console.log("The Cobra is Alive...")}});

