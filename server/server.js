const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8091"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const db = require("./app/models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

//routing

app.get("/",(req,res) => {
    res.json({
        message: "Hello World!"
    });
});

require("./app/routes/series.route")(app);

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});