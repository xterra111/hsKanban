import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import React, { useState, useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { makeStyles } from "@material-ui/core/styles";
import ContextHandler from "../../mock/contexthandler";

// Material UI is a pain, however sooo much better than Tailwind

const useStyles = makeStyles((theme) => ({
	taskCard: {
		margin: theme.spacing(0, 1, 1, 1),
		paddingBottom: theme.spacing(4),
	},
	taskcardBtns: {
		margin: theme.spacing(1),
		background: "lightblue",
	},
	taskCardBtnConfirm: {
		margin: theme.spacing(0, 1, 1, 1),
	},
	cardArea: {
		margin: theme.spacing(1),
	},
}));

const AddTask = ({ setExpand, columnId, itemtype }) => {
	const taskCardStyle = useStyles();
	const [header, setHeader] = useState("");
	const { newAddTask, newAddColumn } = useContext(ContextHandler);

	// Set the taskCardHeader to the value of the input field
	const onChangeHandler = (e) => {
		//console.log(e.target.value);
		setHeader(e.target.value);
	};

	// Probably need a better handler for blur.

	// NewAddTask is a function that is passed to the ContextHandler
	// NewAddTask also is a function that is used to create a new task card.
	// The function takes in the columnId which is the ID of cuurent Column  and the taskCardHeader as parameters.

	const onAddTaskBtnClick = () => {
		if (itemtype === "taskcard") {
			newAddTask(header, columnId);
			setHeader("");
			setExpand(false);
		} else {
			newAddColumn(header);
			setHeader("");
			setExpand(false);
		}
	};

	// const blurHandler = () => {
	// 	setTaskCardHeader("");
	// 	setExpand(false);
	// };
	// This is invoked by clicking on the Add Task Card in the AddTaskCardHolder component
	//Displays a multiline are to add details of the new card header + AddTaskCard button + close Button
	return (
		<div>
			<div>
				<Paper className={taskCardStyle.taskCard}>
					<InputBase
						onChange={onChangeHandler}
						multiline
						onBlur={() => {
							setExpand(false);
						}}
						fullWidth
						placeholder={
							itemtype === "taskcard" ? "Enter Task..." : "Enter List Name..."
						}
						value={header}
						inputProps={taskCardStyle.cardArea}
						//onBlur={blurHandler}
					/>
				</Paper>
			</div>
			<div>
				<Button
					onClick={onAddTaskBtnClick}
					className={taskCardStyle.taskcardBtns}
					variant="contained"
					startIcon={<AddCircleIcon />}>
					{itemtype === "taskcard" ? "Add Task" : "Add Column"}
				</Button>
				<IconButton>
					<CloseIcon onClick={() => setExpand(false)} />
				</IconButton>
			</div>
		</div>
	);
};

export default AddTask;
