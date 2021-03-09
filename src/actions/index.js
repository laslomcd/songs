export const selectSong = (song) => {
	return {
		type: "SONE_SELECTED",
		payload: song,
	};
};
