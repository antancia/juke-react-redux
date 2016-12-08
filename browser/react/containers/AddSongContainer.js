import { connect } from 'react-redux';
import { addSongToPlaylist} from '../action-creators/playlists';
import AddSongClass from '../classes/AddSongClass';

const mapStateToProps = (state, ownProps) => {

  return {
    songs: state.songs,
    playlists: state.playlists.selected,
  };

}

const mapDispatchToProps = function (dispatch) {
  return {
   assignSongToPlaylist(playlistId, songId) {
     dispatch(addSongToPlaylist(playlistId, songId));
   }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSongClass);
