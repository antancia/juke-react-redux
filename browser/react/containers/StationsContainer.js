import { connect } from 'react-redux';
import Stations from '../components/Stations';

const convertSongtoStations = function (songs) {
  const genreObj = {};

  songs.map((song) => {
    if (genreObj[song.genre]) {
      genreObj[song.genre].push(song);
    } else {
      genreObj[song.genre] = [song];
    }
  })

  return genreObj;
}

const mapStateToProps = function (state) {
  return {
    stations: convertSongtoStations(state.songs)
  };
}

const mapDispatchToProps = function (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);

