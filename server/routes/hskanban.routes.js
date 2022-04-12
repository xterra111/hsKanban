const HsKanbanController = require("../controllers/");

module.exports = (app) => {
	//Route to set so that we can get all of the items.
	app.get("/api/pets", petShelterController.findAllPets);
	app.get("/api/pets/:id", petShelterController.onePetDetail);
	app.post("/api/pets", petShelterController.createPets);
	app.put("/api/pets/edit/:id", petShelterController.updateExistingPet);

	app.delete("/api/pets/:id", petShelterController.deleteExistingPet);
};
