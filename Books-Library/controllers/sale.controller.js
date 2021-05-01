const saleModel = require('../models/sale.model');

const saleController = {
    create: (req, res) => {
        const sale = {
            sellerID: req.body.sellerID,
            bookID: req.body.bookID
        };

        saleModel.create(sale, (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send({
                code: '200',
                data: results
            });
        });
    },

    get: (_req, res) => {
        saleModel.getAll((err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send({
                code: '200',
                data: results
            });
        });
    }
};

module.exports = saleController;