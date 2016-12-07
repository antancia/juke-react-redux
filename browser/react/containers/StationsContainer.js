import { connect } from 'react-redux';
import Stations from '../components/Stations';
import {convertSongtoStations} from '../utils';

const mapStateToProps = function (state) {
  return {
    stations: convertSongtoStations(state.songs)
  };
}

const mapDispatchToProps = function (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);

