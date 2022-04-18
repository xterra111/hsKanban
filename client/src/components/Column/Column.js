import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ColumnHeader from "./ColumnHeader";
import TaskCard from "../Task/TaskCard";
import AddTaskCardHolder from "../Task/AddTaskCardHolder";
import { Droppable } from "react-beautiful-dnd";

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

				<Droppable droppableId={column.id}>
					{(provided) => (
						<div ref={provided.innerRef} {...provided.droppableProps}>
							{column.taskCards.map((taskcard, index) => (
								<TaskCard
									key={taskcard.id}
									taskcard={taskcard}
									index={index}
									columnId={column.id}
								/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>

				<AddTaskCardHolder columnId={column.id} itemtype="taskcard" />
			</Paper>
		</div>
	);
};

export default Column;
