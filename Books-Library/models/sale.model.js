const mysqlConnection = require('../config/database');

const sale = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    create(params, callback) {
        const {
            sellerID,
            bookID
        } = params;
        const query = `INSERT INTO Sale (sellerID, bookID)
            VALUES (${sellerID}, ${bookID});`;
        return this.executeQuery(query, callback);
    },
    getAll(callback) {
        const query = `SELECT s.id, b.title AS book,
                CONCAT(sl.firstName, ' ', sl.lastName) AS seller
            FROM Sale s
            INNER JOIN Book b ON b.id = s.bookID
            INNER JOIN Seller sl ON sl.id = s.sellerID;`;
        return this.executeQuery(query, callback);
    }
};

module.exports = sale;