import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import Loader from "../Loader/Loader";
import styles from "./Albums.module.css";

interface AlbumType {
	cover_medium: string;
	title: string;
	release_date: string;
}

const Albums = () => {
	const [state] = useContext(Context);

	const albumList = () => {
		if (state.loading) {
			return <Loader />;
		}

		if (!state.albums.data.length) {
			return <p>This artist does not have any albums</p>;
		}
		const data = state.albums.data.slice(0, 4); // ease of use, can be expanded
		return data.map((i: AlbumType) => (
			<div key={i.title} className={styles.card}>
				<img
					src={i.cover_medium}
					alt={`${i.title}-cover`}
					className={styles.image}
				/>
				<p className={styles.title}>{i.title}</p>
				<p className={styles.releaseDate}>{i.release_date.slice(0, 4)}</p>
			</div>
		));
	};

	return (
		<div className={styles.container}>
			<h2>Albums</h2>
			<div className={styles.albumList}>{albumList()}</div>
		</div>
	);
};

export default Albums;
