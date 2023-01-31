import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../../Hooks/Api";
import styles from "./Home.module.css";
import { Context } from "../../Context/Context";
import SearchResults from "../../Components/SearchResults/SearchResults";
import Loader from "../../Components/Loader/Loader";
import Header from "../../Components/Header/Header";

const Home = () => {
	const [state, dispatch] = useContext(Context);
	const { hash } = useLocation();
	const navigate = useNavigate();

	const getAuth = () => {
		window.open(
			"https://connect.deezer.com/oauth/auth.php?app_id=579742&redirect_uri=http://localhost:3000&perms=offline_access,email&response_type=token",
			"_self"
		);
	};

	useEffect(() => {
		if (sessionStorage.getItem("isAuth")) {
			return;
		}
		if (!hash && !state.auth && !hash.length) {
			console.log("no hash, no auth");
			getAuth();
		} else if (!state.auth) {
			console.log("no auth");
			dispatch({ type: "set_auth", payload: hash });
			navigate("");
		} else {
			console.log("has everything");
			sessionStorage.setItem("isAuth", "true");
			navigate("");
		}
	}, [state]);

	const renderData = () => {
		if (state.loading) {
			return <Loader />;
		}
		if (!state.results || !state.results.data) {
			return <h1 className={styles.blank}>Search for an artist or song</h1>;
		} else {
			return <SearchResults data={state.results.data} />;
		}
	};

	return (
		<div className={styles.body}>
			<Header />
			{renderData()}
		</div>
	);
};

export default Home;
