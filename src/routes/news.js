const News = require('../controllers/news');

module.exports = function(app) {
    
    app.route('/news/match').post(async (req, res, next) => {
        try {
            const { title, description, matchName } = req.body;
            return res.json(await News.postNewsForMatch(matchName, title, description));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').post(async (req, res, next) => {
        try {
            const { title, description, tourName } = req.body;
            return res.json(await News.postNewsForTour(tourName, title, description));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/:matchId').get(async (req, res, next) => {
		try {
			return res.json(await News.getNewsByMatchId(req.params.matchId));
		} catch (err) {
			return next(err);
		}
    });

    app.route('/news/tour/:tourId').get(async (req, res, next) => {
		try {
			return res.json(await News.getNewsByTourId(req.params.tourId));
		} catch (err) {
			return next(err);
		}
    });

    app.route('/news/sport/:sportId').get(async (req, res, next) => {
		try {
			return res.json(await News.getNewsBySportId(req.params.sportId));
		} catch (err) {
			return next(err);
		}
    });
}