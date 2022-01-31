const nfts = require("./../nfts");

const express = require("express");
const router = express.Router();

// GET all nfts
router.get("/", (req, res) => {
	res.json(nfts);
});

// GET nfts by user id
router.get("/:userId", (req, res) => {
	res.json(nfts);
});

// POST nfts/create
router.post("/create/:userId", (req, res) => {
	res.json(`New nft: ${req.params.userId}`);
});
// UPDATE nfts/:nftId
router.put("/:nftId/:userId", (req, res) => {
	res.json(`Updating nft: ${req.params.nftId}`);
});

// GET nfts/:nftId
router.get("/:nftId/:userId", (req, res) => {
	res.json(`Getting nft: ${req.params.nftId}`);
});
// DELETE nfts/:nftId
router.delete("/:nftId", (req, res) => {
	res.json(`Deleting nft: ${req.params.nftId}`);
});

module.exports = router;
