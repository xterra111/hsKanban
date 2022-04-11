import { FormHelperText, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	cardTask: {
		padding: theme.spacing(1, 1, 1, 1),
		margin: theme.spacing(1),
		display: "flex",
	},
}));

const TaskCard = () => {
	const cardTaskStyle = useStyles();
	return (
		<div>
			<Paper className={cardTaskStyle.cardTask}>Task Card Headline</Paper>
		</div>
	);
};

export default TaskCard;
