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
		marginTop: theme.spacing(5),
	},
}));

const AddTaskCardHolder = () => {
	const addtaskhldr = useStyles();
	const [expand, setExpand] = useState(false);
	return (
		<div className={addtaskhldr.addcarddiv}>
			<Collapse in={expand}>
				<AddTask setExpand={setExpand} />
			</Collapse>

			<Collapse in={!expand}>
				<Paper
					className={addtaskhldr.addcrdhldr}
					onClick={() => setExpand(!expand)}>
					<Typography>Add Card</Typography>
				</Paper>
			</Collapse>
		</div>
	);
};

export default AddTaskCardHolder;
