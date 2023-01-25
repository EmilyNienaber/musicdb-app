import React from "react";
import styles from "./Card.module.css";

interface Props {
	imageUri: string;
	songName: string;
	trackLenght: string;
	artistName: string;
	albumName: string;
}

const Card = ({
	imageUri,
	songName,
	trackLenght,
	artistName,
	albumName,
}: Props) => {
	return (
		<div className={styles.body}>
			<div className={styles.bodyImg} />
			<div className={styles.infoPanel}>
				<div className={styles.titleRow}>
					<p className={styles.title}>{songName}</p>
					<p className={styles.trackLength}>{trackLenght}</p>
				</div>
				<p className={styles.artist}>by {artistName}</p>
				<p className={styles.album}>{albumName}</p>
			</div>
		</div>
	);
};

export default Card;
