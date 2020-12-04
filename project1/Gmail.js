const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const oauth2Client = new OAuth2(
	"1069692756681-vg915hntpqslfasbqtdmvge6nmfdbsj4.apps.googleusercontent.com",
	"ZPvg4LFUUEBAlS8gFeclzuhl"
);

oauth2Client.setCredentials({
	refresh_token:
		"1//04kQxv6_EOxCkCgYIARAAGAQSNwF-L9IrOEslMnxdOkVL1wLy5a-zoqLslNzU9C-KDqqmz62cxx8OGTTmqHVQ25t5JneG-Xd1E-g",
});

const myAccessToken = oauth2Client.getAccessToken();

let mailTransporter = nodemailer.createTransport({
	
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		type: "oauth2",
		user: "erictan04298@gmail.com",
		clientId:
			"1069692756681-vg915hntpqslfasbqtdmvge6nmfdbsj4.apps.googleusercontent.com",
		clientSecret: "ZPvg4LFUUEBAlS8gFeclzuhl",
		accessToken: myAccessToken,
		refreshToken:
			"1//04kQxv6_EOxCkCgYIARAAGAQSNwF-L9IrOEslMnxdOkVL1wLy5a-zoqLslNzU9C-KDqqmz62cxx8OGTTmqHVQ25t5JneG-Xd1E-g",
	},
	tls: {
		rejectUnauthorized: false,
	},
});

router.post("/", (req, res) => {
	console.log("mail");
	const { username, subject, message } = req.body;
	let mailDetails = {
		from: "erictan04298@gmail.com",
		to: "erictantzeqiang@gmail.com",
		subject: subject,
		text: `username: ${username}\nmessage: ${message}`,
	};
	mailTransporter.sendMail(mailDetails, function (err, data) {
		if (err) {
			console.log("Error Occurs", err);
		} else {
			console.log("Email sent successfully", data.response);
		}
	});
	res.send("11");
});

// const port = process.env.PORT || 3001;
// app.listen(port, () => {
// 	console.log("listening to port", port);
// });

module.exports = router;
