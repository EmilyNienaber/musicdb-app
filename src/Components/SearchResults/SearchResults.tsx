import React from "react";
import styles from "./SearchResults.module.css";
import Card from "../SongCard/SongCard";

export interface ResultType {
	album: {
		cover_medium: string;
		title: string;
		id: number;
	};
	artist: {
		id: number;
		name: string;
	};
	duration: number;
	title_short: string;
	id: number;
}

interface Props {
	data: ResultType[];
}

const SearchResults = ({ data }: Props) => {
	return (
		<div className={styles.body}>
			{data.map((i) => {
				const minutes = Math.floor(i.duration / 60);
				const seconds = i.duration - minutes * 60;
				return (
					<Card
						key={`song-${i.id}`}
						imageUri={i.album.cover_medium}
						songName={i.title_short}
						artistName={i.artist.name}
						trackLenght={`${minutes}:${seconds > 9 ? seconds : `0${seconds}`}`}
						albumName={i.album.title}
						artistId={i.artist.id}
					/>
				);
			})}
		</div>
	);
};

export default SearchResults;
