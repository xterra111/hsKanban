import { Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	cardTask: {
		padding: theme.spacing(1, 1, 1, 1),
		margin: theme.spacing(1),
		display: "flex",
	},
}));

const TaskCard = ({ taskcard }) => {
	const cardTaskStyle = useStyles();
	return (
		<div>
			{/* Displaying the Card heading here */}
			<Paper className={cardTaskStyle.cardTask}>{taskcard.heading}</Paper>
		</div>
	);
};

export default TaskCard;
