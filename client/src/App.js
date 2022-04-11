import "./App.css";
import React, { useState } from "react";

import Column from "./components/Column/Column";
import datastore from "././mock/datastore";

function App() {
	const [data, setData] = useState(datastore);
	return (
		<div className="App">
			{data.columnIds.map((columnId) => {
				const column = data.columns[columnId];
				return <Column column={column} key={columnId} />;
			})}
		</div>
	);
}

export default App;
