import { Paper } from "@material-ui/core";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";

import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import ContextHandler from "../../mock/contexthandler";

const useStyles = makeStyles((theme) => ({
	cardTask: {
		padding: theme.spacing(1, 1, 1, 1),
		margin: theme.spacing(1),
		display: "flex",
	},
}));

const TaskCard = ({ taskcard, index, columnId, itemtype }) => {
	const cardTaskStyle = useStyles();

	const { deleteTask } = useContext(ContextHandler);

	const onDeleteBtnClick = () => {
		//if (itemtype === "taskcard") {
		deleteTask(taskcard.heading, columnId);
		//}
		// } else {
		// 	newAddColumn(header);
		// 	setHeader("");
		// 	setExpand(false);
		// }
	};

	return (
		<Draggable draggableId={taskcard.id} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}>
					{/* Displaying the Card heading here */}
					<Paper className={cardTaskStyle.cardTask}>
						{taskcard.heading}
						<button
							startIcon={<DeleteIcon />}
							variant="contained"
							color="secondary"
							style={{
								backgroundColor: "#ff0000",
								borderRadius: "50%",
								padding: "5px",
								margin: "5px",
								width: "20px",
								height: "20px",
								border: "none",
								outline: "none",
								cursor: "pointer",
							}}
							onClick={onDeleteBtnClick}></button>
					</Paper>
				</div>
			)}
		</Draggable>
	);
};

export default TaskCard;
