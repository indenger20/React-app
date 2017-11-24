const express = require("express");
const fs = require("fs");
const sqlite = require("sql.js");


const filebuffer = fs.readFileSync("db/usda-nnd.sqlite3");

const db = new sqlite.Database(filebuffer);

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.post("/react-app/api/auth", (req, res) => {
    let data = req.body;
    console.log(req.body);
    res.send({
        errors: data
    });
});



app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
