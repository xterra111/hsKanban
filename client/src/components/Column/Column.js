import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ColumnHeader from "./ColumnHeader";
import TaskCard from "../Task/TaskCard";
import AddTaskCardHolder from "../Task/AddTaskCardHolder";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "300px",
		backgroundColor: "#eeeeee",
		marginLeft: theme.spacing(1),
		marginTop: theme.spacing(1),
	},
}));

const Column = ({ column }) => {
	const paperStyle = useStyles();
	return (
		<div>
			<Paper className={paperStyle.root}>
				<ColumnHeader title={column.title} />
				{column.taskCards.map((taskcard) => (
					<TaskCard key={taskcard.id} taskcard={taskcard} />
				))}
				<AddTaskCardHolder columnId={column.id} itemtype="taskcard" />
			</Paper>
		</div>
	);
};

export default Column;
