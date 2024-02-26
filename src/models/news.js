const mysql = require('../lib/mysql');

const postNewsForMatch = async (matchName, title, description) => {
	const statement = 'insert into news (title, description, matchId, tourId, sportId) ' +
	'select \'' + title + '\' as title, \'' + description + '\' as description, m.id as matchId, ' +
	't.id as tourId, s.id as sportId ' +
	'from tours t inner join sports s on t.sportId = s.id ' + 
	'inner join matches m on m.tourId = t.id ' +
	'where m.name = ?';
    const parameters = [ matchName ];
    return await mysql.query(statement, parameters);
}

const postNewsForTour = async (tourName, title, description) => {
    const statement = 'insert into news (title, description, matchId, tourId, sportId) ' +
	'select \'' + title + '\' as title, \'' + description + '\' as desciption, null as matchId, ' +
	't.id as tourId, s.id as sportId from tours t inner join sports s ' +
	'on t.sportId = s.id where t.name = ?';
    const parameters = [ tourName ];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async (matchId) => {
	const statement = 'select * from news where matchId = ?';
	const parameters = [ matchId ];
	return await mysql.query(statement, parameters);
}

const getNewsByTourId = async (tourId) => {
  	const statement = 'select * from news where tourId = ?';
	const parameters = [ tourId ];
	return await mysql.query(statement, parameters);
}

const getNewsBySportId = async (sportId) => {
	const statement = 'select * from news where sportId = ?';
	const parameters = [ sportId ];
	return await mysql.query(statement, parameters);
}

module.exports = {
  	postNewsForMatch: postNewsForMatch,
  	postNewsForTour: postNewsForTour,
  	getNewsByMatchId: getNewsByMatchId,
  	getNewsByTourId: getNewsByTourId,
  	getNewsBySportId: getNewsBySportId
}