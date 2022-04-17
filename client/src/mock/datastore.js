const taskCards = [
	{
		id: "taskCard1",
		heading: "Simple Simon went to the well",
	},

	{
		id: "taskCard2",
		heading: "Baaba blacksheep reading",
	},

	{
		id: "taskCard3",
		heading: "Tintin and the vikings saga",
	},
];

const data = {
	columns: {
		column1: {
			id: "column1",
			title: "Simple",
			taskCards,
		},
	},
	columnIds: ["column1"],
};

export default data;
