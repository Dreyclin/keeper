const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost:27017/keeperDB');

const itemSchema = mongoose.Schema({
    title: String,
    content: String
})

const Item = mongoose.model("Item", itemSchema);

app.get("/load", (req, res) => {
    
    Item.find({}).then(items => {
        res.send(items);
    })

})

app.post("/delete", (req, res) => {
    const itemId = req.body.id;

    Item.findByIdAndDelete(itemId).then(() => {
        res.redirect("/load");
    })
})

app.post('/add', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    const newItem = new Item({
        title: title,
        content: content,
    })

    newItem.save().then(() => {
        res.redirect("/load");
    });

  
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})