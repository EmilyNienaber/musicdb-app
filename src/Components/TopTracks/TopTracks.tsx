import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import Loader from "../Loader/Loader";
import styles from "./TopTracks.module.css";

interface Track {
	id: number;
	title_short: string;
	duration: number;
}

const TopTracks = () => {
	const [state] = useContext(Context);

	console.log({ state });

	const getDuration = (total: number) => {
		const minutes = Math.floor(total / 60);
		const seconds = total - minutes * 60;
		return `${minutes}:${seconds > 9 ? seconds : `0${seconds}`}`;
	};

	const trackList = () => {
		const { data } = state.topTracks;
		console.log({ data });
		return data.map((i: Track, index: number) => (
			<div key={i.title_short} className={styles.track}>
				<p className={styles.number}>{index + 1}</p>
				<p className={styles.trackName}>{i.title_short}</p>
				<p className={styles.time}>{getDuration(i.duration)}</p>
			</div>
		));
	};

	return (
		<div className={styles.container}>
			<p className={styles.title}>Top Tracks</p>
			<div className={styles.trackList}>{trackList()}</div>
		</div>
	);
};

export default TopTracks;
