const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


require("./controllers/router")(app);


app.listen(8080, (req, res)=> {
    console.log("Tudo ok!");
})