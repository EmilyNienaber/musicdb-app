import React, { BaseSyntheticEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
	const [search, setSearch] = useState("");

	const handleChange = (e: BaseSyntheticEvent) => {
		setSearch(e.target.value);
	};

	return (
		<div className={styles.body}>
			<FaSearch className={styles.icon} />
			<input
				className={styles.input}
				type='text'
				value={search}
				onChange={handleChange}
				placeholder='Search for a track'
			/>
		</div>
	);
};

export default SearchBar;
