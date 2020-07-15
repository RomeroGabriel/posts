var express = require('express');
var router = express.Router();
const { getPostUser } = require('../controllers/UserControler');

router.get('/', getPostUser);

module.exports = router;