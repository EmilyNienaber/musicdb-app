import React from "react";
import styles from "./SearchResults.module.css";
import Card from "../Card/Card";

export interface ResultType {
	imageUri: string;
	songName: string;
	artistName: string;
	trackLength: string;
	albumName: string;
}

interface Props {
	data: ResultType[];
}

const SearchResults = ({ data }: Props) => {
	return (
		<div className={styles.body}>
			{data.map((i) => (
				<Card
					imageUri={i.imageUri}
					songName={i.songName}
					artistName={i.artistName}
					trackLenght={i.trackLength}
					albumName={i.albumName}
				/>
			))}
		</div>
	);
};

export default SearchResults;
