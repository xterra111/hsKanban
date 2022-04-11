import React, { useState } from "react";
import { FormHelperText, InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	editHeader: {
		cursor: "pointer",
		marginLeft: theme.spacing(1),
		display: "flex",
	},
	editinput: {
		"&:focus": {
			backgroundColor: "#9e9e9e",
		},
		margin: theme.spacing(1),
		display: "flex",
	},
}));

const ColumnHeader = () => {
	const [updateTitle, setUpdateTitle] = useState(false);
	const columnHeaderEdit = useStyles();
	return (
		<div>
			{updateTitle ? (
				<div>
					<InputBase
						onBlur={() => setUpdateTitle(!updateTitle)}
						inputProps={{ className: columnHeaderEdit.editinput }}
						fullWidth
						value="Column Backlog"
					/>
				</div>
			) : (
				<div className={columnHeaderEdit.editHeader}>
					<Typography onClick={() => setUpdateTitle(!updateTitle)}>
						Column Backlog
					</Typography>
				</div>
			)}
		</div>
	);
};

export default ColumnHeader;
