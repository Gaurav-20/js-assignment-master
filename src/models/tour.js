const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async name => {
    // const statement = 'select * from matches left join tours on matches.tourId = tours.id where tours.name = ?';
    const statement = 'select * from matches where tourId in (select id from tours where name = ?)';
    const parameters = [ name ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}