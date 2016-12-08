import { connect } from 'react-redux';
import Station from '../components/Station';
import {toggleSong} from '../action-creators/player'
import {convertSongtoStations, convertSong} from '../utils';

const makeSongsNice = ((songs, ownProps) => {
  const genre = ownProps.params.genreName;
  const genreSongs = convertSongtoStations(songs)[genre];

  return genreSongs.map(function(song){
    return convertSong(song);
  })
})


const mapStateToProps = (state, ownProps) => {

  return {
    genre: ownProps.params.genreName,
    songs: makeSongsNice(state.songs, ownProps),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };

}

const mapDispatchToProps = function (dispatch) {
  return {
    toggleSong(){
      dispatch(toggleSong());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);
