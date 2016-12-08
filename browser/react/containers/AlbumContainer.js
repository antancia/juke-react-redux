import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {

  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };

}

const mapDispatchToProps = function (dispatch) {
  return {
   toggleOne(song, list) {
    dispatch(toggleSong(song, list));
   }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
