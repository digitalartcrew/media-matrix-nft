// load the things we need
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const userSchema = new mongoose.Schema({
	firstname: String,
	username: String,
	lastname: String,
	address: String,
	apt: String,
	city: String,
	state: String,
	zip: Number,
	phone: String,
	email: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model("User", userSchema);
