import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useFetch } from "../../Hooks/Api";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
	const [search, setSearch] = useState("");

	const handleChange = (e: BaseSyntheticEvent) => {
		setSearch(e.target.value);
	};

	const { getSearch } = useFetch(search);

	useEffect(() => {
		if (!search.length) {
			return;
		}
		const searchTimeOut = setTimeout(() => {
			getSearch();

			console.log({ search });
		}, 250);

		return () => {
			clearTimeout(searchTimeOut);
		};
	}, [search]);

	return (
		<div className={styles.body}>
			<FaSearch className={styles.icon} />
			<input
				className={styles.input}
				type='text'
				value={search}
				onChange={handleChange}
				placeholder='Search'
			/>
			<FaSearch className={styles.iconMobile} />
		</div>
	);
};

export default SearchBar;
