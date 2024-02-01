const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;


mongoose.connection('mongodb://localhost:27017/keeperDB');

const itemSchema = mongoose.Schema({
    title: String,
    content: String
})

const Item = new mongoose.model("Item", itemSchema);

app.get("/express_backend", (req, res) => {
    res.send("EXPRESS IS CONNECTED!");
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})