const express = require("express");
const router = express.Router();

// Define routes for the Services page
router.get("/", (req, res) => {
  // Render the Services page
  res.render("services");
});

module.exports = router;
