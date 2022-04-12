import "./App.css";
import React, { useState } from "react";

import Column from "./components/Column/Column";
import datastore from "././mock/datastore";
import ContextHandler from "./mock/contexthandler";

import { v4 as uuidv4 } from "uuid";
import AddTaskCardHolder from "./components/Task/AddTaskCardHolder";

import { makeStyles } from "@material-ui/core/styles";

import { DragDropContext } from "react-beautiful-dnd";

// Set the Styling for the List creation portion

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		overflowY: "auto",
	},
}));

function App() {
	const [data, setData] = useState(datastore);

	// Set the styling for the Add List portion
	const addListStyles = useStyles();

	// Add a new list to the data store
	const newAddTask = (heading, columnId) => {
		//console.log(heading, columnId);
		const newAddTaskId = uuidv4();
		console.log(newAddTaskId);
		const newTaskCard = {
			id: newAddTaskId,
			heading: heading,
		};
		const column = data.columns[columnId];
		column.taskCards.push(newTaskCard);

		const refreshedData = {
			...data,
			columns: {
				...data.columns,
				[columnId]: column,
			},
		};
		setData(refreshedData);
	};

	// Add a new column to the data store

	const newAddColumn = (heading) => {
		//console.log(heading, columnId);
		const newAddColumnId = uuidv4();
		//console.log(newAddColumnId);
		const newColumn = {
			id: newAddColumnId,
			title: heading,
			taskCards: [],
		};
		// const column = data.columns[columnId];
		// column.taskCards.push(newTaskCard);

		const refreshedData = {
			columnIds: [...data.columnIds, newAddColumnId],
			columns: {
				...data.columns,
				[newAddColumnId]: newColumn,
			},
		};
		setData(refreshedData);
	};

	const handleOnDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		if (!result.destination) {
			return;
		}

		const sourceColumn = data.columns[source.droppableId];
		const destinationColumn = data.columns[destination.droppableId];
		const selectedtaskCard = sourceColumn.taskCards.filter(
			(taskCard) => taskCard.id === draggableId
		)[0];

		if (destination.droppableId === source.droppableId) {
			sourceColumn.taskCards.splice(source.index, 1);
			destinationColumn.taskCards.splice(
				destination.index,
				0,
				selectedtaskCard
			);

			const refreshedData = {
				...data,
				columns: {
					...data.columns,
					[sourceColumn.id]: destinationColumn,
				},
			};
			setData(refreshedData);
		} else {
			sourceColumn.taskCards.splice(source.index, 1);
			destinationColumn.taskCards.splice(
				destination.index,
				0,
				selectedtaskCard
			);

			const refreshedData = {
				...data,
				columns: {
					...data.columns,
					[sourceColumn.id]: sourceColumn,
					[destinationColumn.id]: destinationColumn,
				},
			};
			setData(refreshedData);
		}
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<ContextHandler.Provider value={{ newAddTask, newAddColumn }}>
				<div className={addListStyles.root}>
					{data.columnIds.map((columnId) => {
						const column = data.columns[columnId];
						return <Column column={column} key={columnId} />;
					})}

					<AddTaskCardHolder itemtype="column" />
				</div>
			</ContextHandler.Provider>
		</DragDropContext>
	);
}

export default App;
