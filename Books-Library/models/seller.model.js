const mysqlConnection = require('../config/database');

const seller = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    create(params, callback) {
        const {
            dpi,
            firstName,
            lastName,
            address,
            phone
        } = params;
        const query = `INSERT INTO Seller (dpi, firstName,
                lastName, address, phone)
            VALUES ("${dpi}", "${firstName}", "${lastName}", 
                "${address}", "${phone}");`;
        return this.executeQuery(query, callback);
    },
    getAll(callback) {
        const query = 'SELECT * FROM Seller;';
        return this.executeQuery(query, callback);
    }
};

module.exports = seller;