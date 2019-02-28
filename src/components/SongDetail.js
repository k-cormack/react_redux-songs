import React from 'react';
import { connect } from 'react-redux';


const  SongDetail = (props) => {
  console.log(props);
  if (!props.song) {
    return (
      <div>
        <h3>Please select a song!</h3>
      </div>
    );
  }
  return (
    <div>
      <h3>Details for:</h3>
        <p>
          {props.song.title}
          <br />
          Duration: {props.song.duration}
        </p>      
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    song: state.selectedSong,
    };
};

export default connect(mapStateToProps)(SongDetail);