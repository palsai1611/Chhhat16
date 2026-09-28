const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Chhhat backend is running!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        app: "chhhat16"
    });
});
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
    console.log(`Chhhat backend running on ${HOST}:${PORT}`);
});
