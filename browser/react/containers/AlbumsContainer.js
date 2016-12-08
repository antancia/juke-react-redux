import {connect} from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = (state) => {
  return {
    albums: state.albums.list
  };
}

export default connect(mapStateToProps)(Albums);
