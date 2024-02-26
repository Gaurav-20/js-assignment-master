const News = require('../models/news');

const postNewsForMatch = async (matchName, title, description) => {
	return await News.postNewsForMatch(matchName, title, description);
}

const postNewsForTour = async (tourName, title, description) => {
	return await News.postNewsForTour(tourName, title, description);
}

const getNewsByMatchId = async (matchId) => {
	return await News.getNewsByMatchId(matchId);
}

const getNewsByTourId = async (tourId) => {
	return await News.getNewsByTourId(tourId);
}

const getNewsBySportId = async (sportId) => {
  	return await News.getNewsBySportId(sportId);
}

module.exports = {
  	postNewsForMatch: postNewsForMatch,
	postNewsForTour: postNewsForTour,
  	getNewsByMatchId: getNewsByMatchId,
  	getNewsByTourId: getNewsByTourId,
  	getNewsBySportId: getNewsBySportId
}