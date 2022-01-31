var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/nft-media-app");

mongoose.set("debug", true);

module.exports.User = require("./user");
module.exports.Nft = require("./nft");
