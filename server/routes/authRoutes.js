const express = require("express");
const router = express.Router();
const passport = require("passport");

//Routes for handling user login and authentication
const db = require("../models");

router.post(
	"/login",
	passport.authenticate("local-login"),
	function (req, res) {
		res.json(req.user);
		console.log("Inside Auth JS USER:", req.user);
	}
);

// handle logout
router.post("/logout", function (req, res) {
	req.logOut();
	res.send(200);
});

// loggedin
router.get("/loggedin", function (req, res) {
	res.send(req.isAuthenticated() ? req.user : "0");
});

// signup
router.post("/signup", function (req, res, next) {
	console.log("Input: ", req.body.username);
	db.User.findOne(
		{
			username: req.body.username,
		},
		function (err, user) {
			if (false) {
				res.json(null);
				console.log("User already exists in the database");
				// return;
			} else {
				var newUser = new db.User();
				newUser.username = req.body.username.toLowerCase();
				console.log("We are here!");
				console.log("db: ", req.body);
				newUser.password = newUser.generateHash(req.body.password);

				console.log("new user: ", newUser);
				newUser.save(function (err, user) {
					req.login(user, function (err) {
						if (err) {
							return next(err);
						}
						res.json(user);
					});
				});
			}
		}
	);
});

module.exports = router;
