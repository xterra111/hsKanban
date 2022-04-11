import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ColumnHeader from "./ColumnHeader";
import TaskCard from "../Task/TaskCard";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "300px",
		backgroundColor: "#eeeeee",
		marginLeft: theme.spacing(1),
		marginTop: theme.spacing(1),
	},
}));

const Column = () => {
	const paperStyle = useStyles();
	return (
		<div>
			<Paper className={paperStyle.root}>
				<ColumnHeader />
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
			</Paper>
		</div>
	);
};

export default Column;
