import express from "express";
import properties from "./data/data.js";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json(properties);
});

app.listen(5555, () => {
    console.log("Server started on port 5555");
});
