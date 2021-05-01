const express = require('express');
const router = express.Router();

const sellerController = require('../controllers/seller.controller');

router.route('/')
    .post(sellerController.create)
    .get(sellerController.get);

module.exports = router;