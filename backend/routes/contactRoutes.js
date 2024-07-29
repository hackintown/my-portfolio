const express = require("express");
const router = express.Router();
const { createContact } = require("../controllers/contactCtrl");

// POST /contact
router.post("/contact", createContact);

module.exports = router;
