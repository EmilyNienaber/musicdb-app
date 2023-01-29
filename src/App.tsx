import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import styles from "./App.module.css";
import Home from "./Pages/Home/Home";
import Artist from "./Pages/Artist/Artist";
import { Store } from "./Context/Context";

const router = createBrowserRouter([
	{
		path: "",
		element: <Home />,
	},
	{
		path: "artist/:id",
		element: <Artist />,
	},
]);

const App = () => {
	return (
		<Store>
			<div className={styles.App}>
				<Header />
				<RouterProvider router={router} />
			</div>
		</Store>
	);
};

export default App;
