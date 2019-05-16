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
    this.props.getAllPlayers();
  }

  handleChange(e, category) {
    this.setState({
      [category]: e.target.value
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
