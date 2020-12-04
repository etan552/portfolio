// process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require("./config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const products = require("./routes/products");
const users = require("./routes/users");
const login = require("./routes/login");
const cors = require("cors");
const path = require("path");

console.log(config.serverSecret);

if (!config.serverSecret) {
	console.log("************");
	console.error("Fatal Error - please set server secret key");
	console.log("************");
	process.exit(1);
}
app.use(express.json());
app.use(cors());
app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/login", login);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose
	.connect("mongodb://localhost/playground", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connected to db..."))
	.catch((err) => console.error(err));

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Listening to port ${port}...`);
});
