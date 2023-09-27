const express = require("express");
const router = express.Router();

// Define routes for the Contact Us page
router.get("/", (req, res) => {
  // Render the Contact Us page
  res.render("contact");
});

module.exports = router;
