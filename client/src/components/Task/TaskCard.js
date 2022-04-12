import { Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
	cardTask: {
		padding: theme.spacing(1, 1, 1, 1),
		margin: theme.spacing(1),
		display: "flex",
	},
}));

const TaskCard = ({ taskcard, index }) => {
	const cardTaskStyle = useStyles();
	return (
		<Draggable draggableId={taskcard.id} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}>
					{/* Displaying the Card heading here */}
					<Paper className={cardTaskStyle.cardTask}>{taskcard.heading}</Paper>
				</div>
			)}
		</Draggable>
	);
};

export default TaskCard;
