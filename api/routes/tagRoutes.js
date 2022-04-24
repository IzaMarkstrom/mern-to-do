const express = require('express');
const router = express.Router();
const { authUser } = require("../controllers/auth")

const { getTags } = require("../controllers/tags")

router.get('/', authUser, getTags);

module.exports = router;