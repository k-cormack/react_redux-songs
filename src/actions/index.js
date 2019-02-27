//Action creator

export const selectSong = () => {
  //Returns an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
