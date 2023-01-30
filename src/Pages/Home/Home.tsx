import React, { useState, useContext } from "react";
import { useFetch } from "../../Hooks/Api";
import styles from "./Home.module.css";
import { Context } from "../../Context/Context";
import SearchResults from "../../Components/SearchResults/SearchResults";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
	const [state] = useContext(Context);

	const renderData = () => {
		if (state.loading) {
			return <Loader />;
		}
		if (!state.results || !state.results.data) {
			return <h1>Search for an artist or song</h1>;
		} else {
			return <SearchResults data={state.results.data} />;
		}
	};

	return <div className={styles.body}>{renderData()}</div>;
};

export default Home;
