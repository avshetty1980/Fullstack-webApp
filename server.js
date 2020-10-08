const express = require("express");
const path = require("path");

const routes = require("./routes");

const app = express();

const port = 3000;
//register view engines
app.set("view engine", "ejs");
//location of view
app.set("views", path.join(__dirname, "./views"));

console.log("I'm restarting");

app.use(express.static(path.join(__dirname, "./static")));

app.use("/", routes());

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
