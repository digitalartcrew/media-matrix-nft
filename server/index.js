const express = require("express");
const app = express();
const methodOverride = require("method-override");
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");
const nftRoutes = require("./routes/nftRoutes");
const userRoutes = require("./routes/userRoutes");

//Passport
const passport = require("passport");
require("./config/passport")(passport); //passport configuration

//Cookie and Session
const cookieParser = require("cookie-parser");
const session = require("express-session");

const PORT = process.env.PORT || 3001;

app.use(
	session({
		secret: "awesome",
		resave: true,
		saveUninitialized: true,
	})
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use(express.static(__dirname + "/public"));

// use morgan
app.use(morgan("tiny"));
// use method-override
app.use(methodOverride("_method"));

app.use("/api/auth/", authRoutes);
app.use("/api/nfts/", nftRoutes);
app.use("/api/users/", userRoutes);

app.listen(PORT, () => {
	console.log(`Listening at PORT: ${PORT}`);
});
