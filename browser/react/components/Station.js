import React from 'react';
import Songs from './Songs';

// export default function (props) {
//   const dummydata = {
//     genre: "Instrumental",
//     album: {
//       songs: [
//         {id: 1, artists: [{name: "Dummy Artist"}], genre: "Instrumental", name: "Dummy Song"}
//       ]
//     }
//   };

// const DUMMY_GENRE_NAME = 'Jazz';
// const DUMMY_SONGS = [{
//   id: 1,
//   name: "A Love Supreme",
//   genre: "Jazz",
//   artists: [{ name: "John Coltrane" }]
// }];
// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () {};

export default function (props) {
  return (
    <div>
    {console.log(props)}
      <h3>{props.genre} Station </h3>
      <Songs
        songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleSong}
      />
    </div>
  );
}
