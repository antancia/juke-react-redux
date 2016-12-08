// import Artist from '../components/Artist';
// import {toggleSong} from '../action-creators/player';
import Class from '../classes/FilterableArtistsClass';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return Object.assign(
    {
      children: ownProps.children.props.children
    },
    state.player,
    state.artists
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
