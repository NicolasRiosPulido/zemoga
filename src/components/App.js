import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Prinsipal from "./prinsipal";

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Prinsipal} />
		</BrowserRouter>
	);
}

export default App;
