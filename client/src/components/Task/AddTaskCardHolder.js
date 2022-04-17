import { Collapse, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import AddTask from "./AddTask";

const useStyles = makeStyles((theme) => ({
	addcrdhldr: {
		padding: theme.spacing(1, 1, 1, 1),
		margin: theme.spacing(1),
		"&:hover": {
			backgroundColor: alpha("#000", 0.5),
		},
	},
	addcarddiv: {
		width: "300px",
		marginTop: theme.spacing(1),
	},
}));

const AddTaskCardHolder = ({ columnId, itemtype }) => {
	const addtaskhldr = useStyles();
	const [expand, setExpand] = useState(false);
	console.log(columnId);
	console.log(itemtype);
	return (
		<div className={addtaskhldr.addcarddiv}>
			{/* The below lets you expand the collapse and display the Add Task component
            Passing the columnId as a prop to the AddTask component */}

			<Collapse in={expand}>
				<AddTask
					setExpand={setExpand}
					columnId={columnId}
					itemtype={itemtype}
				/>
			</Collapse>

			<Collapse in={!expand}>
				<Paper
					className={addtaskhldr.addcrdhldr}
					onClick={() => setExpand(!expand)}>
					<Typography>
						{itemtype === "taskcard" ? "Add Task Card" : "Add New Column"}
					</Typography>
				</Paper>
			</Collapse>
		</div>
	);
};

export default AddTaskCardHolder;
