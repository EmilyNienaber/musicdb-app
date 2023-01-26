import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
	const [isLoading, setLoading] = useState(false);

	return (
		<div className={styles.body}>
			{isLoading ? <p>Loading</p> : <h1>Home</h1>}
		</div>
	);
};

export default Home;
