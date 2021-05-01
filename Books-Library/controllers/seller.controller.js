const sellerModel = require('../models/seller.model');

const sellerController = {
    create: (req, res) => {
        let seller = {
            dpi: req.body.dpi,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone
        };

        sellerModel.create(seller, (err, results) => {
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
        sellerModel.getAll((err, results) => {
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

module.exports = sellerController;