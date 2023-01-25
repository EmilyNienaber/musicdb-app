import React from "react";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
	return (
		<div className={styles.body}>
			<div>Header</div>
			<SearchBar />
		</div>
	);
};

export default Header;
