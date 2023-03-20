const express = require('express');
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage").default;
const hbs = require("hbs");
const { registerPartials } = require("hbs")


const app = express();

const port = process.env.PORT || 3000;


//setting the path
const staticpath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../views");

// console.log(path.join(__dirname, "../public"));

//middleware
app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist/css")));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", tempPath);




//routing

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/contact", async(req, res) => {
    try {
        res.render("contact");
    } catch (error) {
        res.status(500).send(error)
    }
})
app.post("/contact", async(req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }

});


//server create

app.listen(port, () => {
    console.log(`server is running at port no ${port}`)
})