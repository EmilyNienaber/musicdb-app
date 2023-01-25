import React from "react";
import Header from "./Components/Header/Header";
import styles from "./App.module.css";
import SearchResults, {
	ResultType,
} from "./Components/SearchResults/SearchResults";

const App = () => {
	//TODO Replace temp data with search results, global storage
	const results: ResultType[] = [
		{
			imageUri: "",
			trackLength: "02:44",
			artistName: "Artist 1",
			songName: "Track 1",
			albumName: "Album 1",
		},
		{
			imageUri: "",
			trackLength: "02:44",
			artistName: "Artist 2",
			songName: "Track 2",
			albumName: "Album 2",
		},
		{
			imageUri: "",
			trackLength: "16:05",
			artistName: "Artist 1",
			songName: "Track 2",
			albumName: "Album reeee",
		},
		{
			imageUri: "",
			trackLength: "03:20",
			artistName: "Artist Name",
			songName: "Test Track",
			albumName: "Album Name",
		},
		{
			imageUri: "",
			trackLength: "02:17",
			artistName: "Artist 1",
			songName: "Track 1",
			albumName: "Album 1",
		},
	];

	return (
		<div className={styles.App}>
			<Header />
			<SearchResults data={results} />
		</div>
	);
};

export default App;
