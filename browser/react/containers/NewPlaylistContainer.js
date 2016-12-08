import {connect} from 'react-redux';
import NewPlaylistClass from '../classes/NewPlaylistClass';
import {addNewPlaylist} from '../action-creators/playlists';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state);
}

const mapStateToDispatch = (dispatch => {
  return addNewPlaylist (userInput => {
    dispatch(addNewPlaylist(userInput));
  })
})

export default connect(mapStateToProps, mapStateToDispatch)(NewPlaylistClass);
