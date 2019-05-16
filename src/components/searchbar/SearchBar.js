import React, { Component } from 'react';
import './Searchbar.scss';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class SearchBar extends Component {
  render() {
    return (
      <div className="Searchbar">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={3}>
            <TextField onChange={e => this.props.handleChange(e, 'name')} value={this.props.name}
              label="Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField onChange={e => this.props.handleChange(e, 'age')} value={this.props.age}
              label="Age"
              fullWidth
            />
          </Grid>  
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="position">Position</InputLabel>
              <Select onChange={e => this.props.handleChange(e, 'position')} value={this.props.position} fullWidth className="custom-select">
                <MenuItem value="Position">Position</MenuItem>
                <MenuItem value="Attacking Midfield">Attacking Midfield</MenuItem>
                <MenuItem value="Central Midfield">Central Midfield</MenuItem>
                <MenuItem value="Centre-Back">Centre-Back</MenuItem>
                <MenuItem value="Centre-Forward">Centre-Forward</MenuItem>
                <MenuItem value="Defensive Midfield">Defensive Midfield</MenuItem>
                <MenuItem value="Keeper">Keeper</MenuItem>
                <MenuItem value="Left Midfield">Left Midfield</MenuItem>
                <MenuItem value="Left Wing">Left Wing</MenuItem>
                <MenuItem value="Left-Back">Left-Back</MenuItem>
                <MenuItem value="Right-Back">Right-Back</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} className="centered">
            <Button  onClick={e => this.props.handleSubmit()} variant="contained" color="primary">
              Search 
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SearchBar;
