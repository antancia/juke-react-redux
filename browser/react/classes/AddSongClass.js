import React from 'react';
import AddSong from '../components/AddSong';

class AddSongClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  checkSongIdExists (songId, playlistSongs) {
    playlistSongs.forEach(song => {
      if (song.id === songId) {
        this.setState({error: true});
      }
    })
  }

  handleSubmit(evt) {

    evt.preventDefault();

    console.log(this.props);
    const playlistId = this.props.playlists.id;
    const songId = this.state.songId;
    const playlistSongs = this.props.playlists.songs;

    this.checkSongIdExists(songId, playlistSongs);
    this.props.assignSongToPlaylist(playlistId, songId);

    console.log(this.state);

    // store.dispatch(addSongToPlaylist(playlistId, songId))
    //   .catch(() => this.setState({ error: true }));

  }

  render() {

    const songs = this.props.songs;
    const error = this.state.error;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

export default AddSongClass;
