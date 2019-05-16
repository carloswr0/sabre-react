import React, { Component } from 'react';
import './PlayersGrid.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class PlayersGrid extends Component {
  convertToAge(birthdate) {
    const todaysYear = new Date().getUTCFullYear();
    const playersBirthYear = new Date(birthdate).getUTCFullYear();
    const playersAge = todaysYear - playersBirthYear;
    return playersAge;
  }

  
  
  render() {
    const { players, filters } = this.props;
    let tempPlayers = [];

    const sample = [ {
      "contractUntil" : "2022-06-30",
      "dateOfBirth" : "1993-05-13",
      "jerseyNumber" : 9,
      "name" : "Romelu Lukaku",
      "nationality" : "Belgium",
      "position" : "Centre-Forward"
    }, {
      "contractUntil" : "2019-06-30",
      "dateOfBirth" : "1990-11-07",
      "jerseyNumber" : 1,
      "name" : "David de Gea",
      "nationality" : "Spain",
      "position" : "Keeper"
    }, {
      "contractUntil" : "2021-06-30",
      "dateOfBirth" : "1987-02-22",
      "jerseyNumber" : 20,
      "name" : "Sergio Romero",
      "nationality" : "Argentina",
      "position" : "Keeper"
    }]


    for (let propName in filters) { 
      tempPlayers = sample.filter(player => { 
        return player.name.like(filters[propName]);
      })
    }
    console.log(sample, tempPlayers, filters);
    /* || !player.position.includes(filters[propName])  this.convertToAge(player.dateOfBirth).includes(filters[propName]) ||*/

    return (
      <Paper className="min-size">   
        <Table>
          <TableHead>
            <TableRow >
              <TableCell>Player</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Age</TableCell>
            </TableRow >
          </TableHead>
          <TableBody>
            {
              players.map((player, i) => {
                return(
                  <TableRow  key={i}>
                    <TableCell>{player.name}</TableCell>
                    <TableCell>{player.position}</TableCell>
                    <TableCell>{player.nationality}</TableCell>
                    <TableCell>{this.convertToAge(player.dateOfBirth)}</TableCell>
                  </TableRow >
                );
              })
            }
            </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default PlayersGrid;
