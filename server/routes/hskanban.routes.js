const HsKanbanController = require("../controllers/hsKanban.controller");

module.exports = (app) => {
	//Route to set so that we can get all of the items.
	app.get("/api/alltaskcards", HsKanbanController.listAllHSKanban);

	app.post("/api/newcard", HsKanbanController.createHsKanban);
	app.put("/api/edit/:id", HsKanbanController.updateExistingHSKanban);
};
