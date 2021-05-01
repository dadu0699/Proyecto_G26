const express = require('express');
const router = express.Router();

const saleController = require('../controllers/sale.controller');

router.route('/')
    .post(saleController.create)
    .get(saleController.get);

module.exports = router;