import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../Hooks/Api";
import styles from "./Artist.module.css";
import { Context } from "../../Context/Context";
import Loader from "../../Components/Loader/Loader";
import Albums from "../../Components/Albums/Albums";
import TopTracks from "../../Components/TopTracks/TopTracks";

const Artist = () => {
	const { id } = useParams();
	const [state, dispatch] = useContext(Context);
	const navigate = useNavigate();
	const { getArtist } = useFetch(id || "");

	useEffect(() => {
		if (!id) {
			navigate("/");
		} else {
			getArtist();
		}
	}, [id]);

	if (!state.artist.name) {
		return <Loader />;
	}

	return (
		<div className={styles.body}>
			<div className={styles.infoBanner}>
				<div className={styles.imageContainer}>
					<img
						alt={`${state.artist.name}-bg-img`}
						src={state.artist.picture_big}
						className={styles.backgroundImage}
					/>
					<h1 className={styles.artistName}>{state.artist.name}</h1>
					<div className={styles.fans}>
						<b>{Math.floor(state.artist.nb_fan / 1000)}K</b> Fans
					</div>
					<p className={styles.artistInfo}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<TopTracks />
			</div>
			<Albums />
		</div>
	);
};

export default Artist;
