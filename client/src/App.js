import "./App.css";
import React, { useState, useEffect } from "react";

import Column from "./components/Column/Column";
//import datastore from "././mock/datastore";
import ContextHandler from "./mock/contexthandler";

import { v4 as uuidv4 } from "uuid";
import AddTaskCardHolder from "./components/Task/AddTaskCardHolder";

import { makeStyles } from "@material-ui/core/styles";

import { DragDropContext } from "react-beautiful-dnd";

import axios from "axios";

// Set the Styling for the List creation portion

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		overflowY: "auto",
	},
}));

function App(props) {
	// Set the styling for the Add List portion
	const addListStyles = useStyles();
	//const { id } = useParams();

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
			//...data,
			columns: {
				...data.columns,
				[columnId]: column,
			},
		};
		console.log(refreshedData + "Before being called in Add Axios");
		console.log(ID + "ID value -> Before being called in to Add Axios");
		axios
			.put("http://localhost:8000/api/edit/" + ID, refreshedData)
			.then((res) => {
				console.log(res.data);
				setTest(!test);
				//setData(refreshedData);
			})
			.catch((err) => {
				console.log(err);
			});

		//setData(refreshedData);
	};

	const deleteTask = (heading, columnId) => {
		//console.log(heading, columnId);
		//const newAddTaskId = uuidv4();
		console.log(heading);
		// const newTaskCard = {
		// 	id: newAddTaskId,
		// 	heading: heading,
		// };
		const column = data.columns[columnId];
		console.log(column);
		const columnTaskCardRemoved = column.taskCards.filter(
			(taskCard) => taskCard.heading !== heading
		);
		console.log(columnTaskCardRemoved);

		const columnpostdelete = data.columns[columnId];
		columnpostdelete.taskCards = columnTaskCardRemoved;

		console.log(columnpostdelete);

		const refreshedData = {
			//...data,
			columns: {
				...data.columns,
				[columnId]: columnpostdelete,
			},
		};
		console.log(refreshedData);
		axios
			.put("http://localhost:8000/api/edit/" + ID, refreshedData)
			.then((res) => {
				console.log(res.data);
				setTest(!test);
			})
			.catch((err) => {
				console.log(err);
			});

		//setData(refreshedData);
	};
	// Add a new column to the data store

	const newAddColumn = (heading) => {
		//console.log(heading, columnId);
		const newAddColumnId = uuidv4();
		//const newAddColumnId = heading;
		//console.log(newAddColumnId);
		const newColumn = {
			id: newAddColumnId,
			//id: heading,
			title: heading,
			taskCards: [],
		};
		// const column = data.columns[columnId];
		// column.taskCards.push(newTaskCard);
		//console.log(data.columnIds);
		//console.log(newAddColumnId);
		console.log(newColumn);

		const refreshedData = {
			columnIds: [...data.columnIds, newAddColumnId],
			//columnIds: [columnIDS, newAddColumnId],
			columns: {
				...data.columns,
				[newAddColumnId]: newColumn,
			},
		};
		console.log(refreshedData);
		//setData(refreshedData);
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

	//const [data, setData] = useState( datastore );
	const [data, setData] = useState([]);
	//const [dataDB, setDataDB] = useState([]);
	const [columnIDS, setColumnIDS] = useState([]);

	const [test, setTest] = useState(false);
	//const [data, setData] = useState([]);

	const [loaded, setLoaded] = useState(false);

	const ID = data._id;

	console.log(ID);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/alltaskcards")
			.then((res) => {
				//console.log(res.data.columns);
				// eslint-disable-next-line no-lone-blocks
				{
					res.data.map((task) => {
						console.log(task.columnIds);
						//setDataDB(task);

						setData(task);
						setTest(true);
						setColumnIDS(task.columnIds);
						setLoaded(true);
					});
				}
			})

			.catch((err) => {
				console.log(err);
			});
	}, [test]);
	return (
		{ loaded } && (
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<ContextHandler.Provider
					value={{ newAddTask, newAddColumn, deleteTask }}>
					<div className={addListStyles.root}>
						{/* {dataDB.columns.map((columnId) => {
							console.log(columnId);
							return (
								<Column
									key={columnId}
									columnId={columnId}
									title={data.columns[columnId].title}
									taskCards={data.columns[columnId].taskCards}
								/>
							);
						})} */}
						{/* {data.columnIds.map((columnId) => {
							const column = data.columns[columnId];
							console.log(column);
							return <Column column={column} key={columnId} />;
						})} */}

						{columnIDS.map((columnId) => {
							const column = data.columns[columnId];
							console.log(column);
							console.log(column.id);
							console.log(column.title);
							console.log(columnId);
							return <Column column={column} key={columnId} />;
						})}

						<AddTaskCardHolder itemtype="column" />
					</div>
				</ContextHandler.Provider>
			</DragDropContext>
		)
	);
}

export default App;
