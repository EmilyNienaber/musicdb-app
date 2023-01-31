import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

// logo not used, because the Deezer logo is not allowed for private use. Though I would add an SVG logo, and style the app to match the desired colours

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleNavigate = () => {
		if (location.pathname === "/") {
			return;
		} else {
			navigate("/");
		}
	};

	return (
		<div className={styles.body}>
			<div
				role='button'
				tab-index={0}
				onClick={() => handleNavigate()}
				className={styles.logo}
			>
				LOGO
			</div>
			<SearchBar />
		</div>
	);
};

export default Header;
