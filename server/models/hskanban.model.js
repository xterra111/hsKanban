const mongoose = require("mongoose");

const hskanbanSchema = new mongoose.Schema(
	{
		columns: {
			column: {
				id: String,
				title: String,
				taskCards: [
					{
						id: String,
						heading: String,
					},
				],
			},
		},
		columnIds: [String],
	},

	{
		timestamps: true,
	}
);

module.exports = mongoose.model("HsKanban", hskanbanSchema);
