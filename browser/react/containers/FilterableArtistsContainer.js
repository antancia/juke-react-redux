// import Artist from '../components/Artist';
// import {toggleSong} from '../action-creators/player';
import Class from '../classes/FilterableArtistsClass';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return Object.assign(
    {
      selectedArtist: state.artists.selected,
      children: ownProps.children.props.children
    },
    state.player
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOne(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Class);
