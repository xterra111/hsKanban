const mongoose = require("mongoose");

const hskanbanSchema = new mongoose.Schema(
	{
		columns: {},

		columnIds: [String],
	},

	{
		timestamps: true,
	}
);

module.exports = mongoose.model("HsKanban", hskanbanSchema);
