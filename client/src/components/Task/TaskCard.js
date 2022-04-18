import { Paper } from "@material-ui/core";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";

import { Button } from "@material-ui/core";
//

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import ContextHandler from "../../mock/contexthandler";

const useStyles = makeStyles((theme) => ({
	cardTask: {
		padding: theme.spacing(1, 1, 1, 1),
		margin: theme.spacing(1),
		display: "flex",
	},
	deleteButton: {
		//margin: theme.spacing(0, 0, 0, 10),
		display: "flex",
		cursor: "pointer",
		borderRadius: "10%",
		//width: "8px",
		align: "right",
		//background: "lightblue",
		// palette: {
		// 	primary: "#009688",
		// 	secondary: "#ff3d00",
		// },
	},
	carddeldiv: {
		margin: theme.spacing(0, 0, 0, 1),
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "right",
	},
	cardtitlediv: {
		margin: theme.spacing(0, 0, 0, 0),
		paddingRight: theme.spacing(5),
		display: "flex",
		width: "90%",
		// flexDirection: "row",
		// width: "300px",
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
						<div className={cardTaskStyle.cardtitlediv}>{taskcard.heading}</div>

						<div className={cardTaskStyle.carddiv}>
							<Button
								className={cardTaskStyle.deleteButton}
								startIcon={<DeleteForeverIcon />}
								variant="transparent"
								color="#ff3d00"
								onClick={onDeleteBtnClick}></Button>
						</div>
					</Paper>
				</div>
			)}
		</Draggable>
	);
};

export default TaskCard;
