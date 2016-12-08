import {connect} from 'react-redux';
import LyricsClass from '../classes/LyricsClass';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state);
}

export default connect(mapStateToProps)(LyricsClass);
