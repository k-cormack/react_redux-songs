import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Enter Sandman', duration: '4:31' },
    { title: 'Symphony of Destruction', duration: '4:10'},
    { title: 'Rocket Man', duration: '3:38'},
    { title: 'Southern Cross', duration: '4:17'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
