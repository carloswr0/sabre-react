import React, { Component } from 'react';
import './Main.scss';

// Components
import PlayersGrid from '../playersgrid/PlayersGrid';
import SearchBar from '../searchbar/SearchBar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      position: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    if(this.props.getAllPlayers) {
      this.props.getAllPlayers();
    }
  }

  handleChange(e, category) {
    let value;
    if(category === 'age') {
      value = e.target.value.replace(/[^0-9]+/, '');
    } else if (category === 'name'){
      value = e.target.value.replace(/[^A-Za-z]+/, '');
    } else if(category === 'position') {
      value = e.target.value;
    }
    this.setState({
      [category]: value
    });
  }

  handleSubmit() {
    this.props.setFilters(this.state.name, this.state.age, this.state.position);
  }

  render() {
    const { players, filters } = this.props;
    return (
      <div className="App">
        <h1>Football Player Finder</h1>
        <SearchBar {...this.props} {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} ></SearchBar>
        <PlayersGrid {...this.props} players={players} filters={filters} ></PlayersGrid>
      </div>
    );
  }
}

export default Main;
