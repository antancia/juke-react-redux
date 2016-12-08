import React from 'react';
import { connect } from 'react-redux';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';
import AddSongClass from '../classes/AddSongClass';

// class AddSongContainer extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = Object.assign({
//       songId: 1,
//       error: false
//     }, store.getState());
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {

//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   handleChange(evt) {
//     this.setState({
//       songId: evt.target.value,
//       error: false
//     });
//   }

//   handleSubmit(evt) {

//     evt.preventDefault();

//

//   }

//   render() {

//     const songs = this.state.songs;
//     const error = this.state.error;

//     return (
//       <AddSong
//         {...this.props}
//         songs={songs}
//         error={error}
//         handleChange={this.handleChange}
//         handleSubmit={this.handleSubmit}/>
//     );
//   }
// }

// export default AddSongContainer;

const mapStateToProps = (state, ownProps) => {

  return {
    songs: state.songs,
    playlists: state.playlists.selected,
  };

}

const mapDispatchToProps = function (dispatch) {
  return {
   assignSongToPlaylist(playlistId, songId) {
     store.dispatch(addSongToPlaylist(playlistId, songId));
   }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSongClass);
