import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{
			title: "Help!",
			duration: "2:30",
		},
		{
			title: "Come Together",
			duration: "3:12",
		},
		{
			title: "Blackbird",
			duration: "3:38",
		},
		{
			title: "Strawberry Fields Forever",
			duration: "4:02",
		},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === action.selectedSong) {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
