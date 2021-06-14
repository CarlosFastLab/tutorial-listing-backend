const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("drop and re-sync db")
});

var corsOptions = {
    origin: "http://localhost:8081" //Este valor provavelmente vai alterar quando subir em nuvem
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Eletrocharles App." });
});

require("./routes/tutorial.routes")(app);

//set port, listen for requests
app.listen(process.env.PORT || 3000,
    () => console.log(`Server is running...`));