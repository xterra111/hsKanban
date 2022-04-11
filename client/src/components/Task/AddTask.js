import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { makeStyles, alpha } from "@material-ui/core/styles";

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

const AddTask = ({ setExpand }) => {
	const taskCardStyle = useStyles();
	return (
		<div>
			<div>
				<Paper className={taskCardStyle.taskCard}>
					<InputBase
						inputProps={taskCardStyle.cardArea}
						onBlur={() => setExpand(false)}
						multiline
						fullWidth
						placeholder="Enter Task..."
					/>
				</Paper>
			</div>
			<div>
				<Button
					className={taskCardStyle.taskcardBtns}
					variant="contained"
					startIcon={<AddCircleIcon />}
					onClick={() => setExpand(false)}>
					> Add Task
				</Button>
				<IconButton>
					<CloseIcon onClick={() => setExpand(false)} />
				</IconButton>
			</div>
		</div>
	);
};

export default AddTask;
