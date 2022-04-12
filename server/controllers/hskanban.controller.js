const HsKanban = require("../models/hskanban.model");

module.exports = {
	createHsKanban: (req, res) => {
		HsKanban.create(req.body)
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	},

	listAllHSKanban: (req, res) => {
		HsKanban.find(req.body)
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	},
};
