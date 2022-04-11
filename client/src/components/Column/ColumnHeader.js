import React, { useState } from "react";
import { InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	editHeaderMain: {
		cursor: "pointer",
		marginLeft: theme.spacing(1),
		display: "flex",
	},
	editHeader: {
		fontSize: "1.2rem",
		fontWeight: "bold",
	},
	editinput: {
		"&:focus": {
			backgroundColor: "#9e9e9e",
		},
		margin: theme.spacing(1),
		display: "flex",
	},
}));

const ColumnHeader = ({ title }) => {
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
						value={title}
					/>
				</div>
			) : (
				<div className={columnHeaderEdit.editHeaderMain}>
					<Typography
						onClick={() => setUpdateTitle(!updateTitle)}
						className={columnHeaderEdit.editHeader}>
						{title}
					</Typography>
				</div>
			)}
		</div>
	);
};

export default ColumnHeader;
