const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mail = require("./Gmail");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/mail", mail);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.post("/", (req, res) => {
	console.log(req.body);
	res.send("post request received");
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
	console.log("listening to port", port);
});
