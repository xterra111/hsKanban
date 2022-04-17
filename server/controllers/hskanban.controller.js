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
	updateExistingHSKanban: (request, response) => {
		HsKanban.findByIdAndUpdate({ _id: request.params.id }, request.body, {
			new: true,
			runValidators: true,
		})
			.then((data) => {
				response.json({
					data,
				});
			})
			.catch((err) => {
				console.log("Update - Something went wrong");
				response.status(400).json(err);
			});
	},

	deleteExistingHSKanban: (request, response) => {
		HsKanban.deleteOne({ _id: request.params.id })
			.then((result) => {
				response.json({
					result,
				});
			})
			.catch((err) => {
				response.json({
					message: "arghh you cannot DELETE this one matey",
					error: err,
				});
			});
	},
};
