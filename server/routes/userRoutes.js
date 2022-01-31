const express = require("express");
const router = express.Router();

// GET users
router.get("/", (req, res) => {
	res.json(`Users`);
});
// POST users/create
router.post("/create", (req, res) => {
	res.json(`Users: ${req.body}`);
});
// UPDATE users/:userId
router.put("/:userId", (req, res) => {
	res.json(`Updating user: ${req.params.userId}`);
});
// GET users/:userId
router.get("/:userId", (req, res) => {
	res.json(`Getting user: ${req.params.userId}`);
});
// DELETE users/:userId
router.delete("/:userId", (req, res) => {
	res.json(`Deleting user: ${req.params.userId}`);
});

module.exports = router;
