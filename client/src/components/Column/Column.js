import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ColumnHeader from "./ColumnHeader";

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
			</Paper>
		</div>
	);
};

export default Column;
