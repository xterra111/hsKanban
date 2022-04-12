const mongoose = require("mongoose");

mongoose
	.connect("mongodb://127.0.0.1:27017/hskanban", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		console.log("DB Connection has been established. Transformer Assemble")
	)
	.catch((err) =>
		console.log("DB Connection is not established. Houston we have a problem")
	);
