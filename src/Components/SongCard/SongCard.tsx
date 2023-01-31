import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SongCard.module.css";

interface Props {
	imageUri: string;
	songName: string;
	trackLenght: string;
	artistName: string;
	albumName: string;
	artistId: number;
}

const Card = ({
	imageUri,
	songName,
	trackLenght,
	artistName,
	albumName,
	artistId,
}: Props) => {
	const navigate = useNavigate();
	return (
		<div className={styles.body}>
			<div className={styles.bodyImg}>
				<img src={imageUri} className={styles.image} />
			</div>
			<div className={styles.infoPanel}>
				<div className={styles.titleRow}>
					<p className={styles.title}>{songName}</p>
					<p className={styles.trackLength}>{trackLenght}</p>
				</div>
				<p
					className={styles.artist}
					role='button'
					onClick={() => navigate(`artist/${artistId}`)}
				>
					by {artistName}
				</p>
				<p className={styles.album}>{albumName}</p>
			</div>
		</div>
	);
};

export default Card;
