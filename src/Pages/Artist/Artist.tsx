import React from "react";
import styles from "./Artist.module.css";

const Artist = () => {
	return (
		<div className={styles.body}>
			<div className={styles.infoBanner}>
				<div className={styles.imageContainer}>
					<h1 className={styles.artistName}>Artist Name</h1>
					<div className={styles.fans}>
						<b>111K</b> Fans
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
				<div className={styles.topTracksContainer}>Top Tracks</div>
			</div>
		</div>
	);
};

export default Artist;
