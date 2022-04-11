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
		"column-1": {
			id: "column-1",
			title: "randoms",
			taskCards,
		},
	},
	columnIds: ["column-1"],
};

export default data;
