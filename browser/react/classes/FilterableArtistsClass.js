import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    console.log('props', this.props);
    console.log('state', this.state);

    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

export default FilterableArtistsClass;
