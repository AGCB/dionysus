import React from 'react'

import {
  sortAscending,
  sortDescending,
} from '../actions/index';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


 export default class Sort extends React.Component {
  render() {
     return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{marginLeft: "30px"}} >Sort</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <button onClick={sortAscending}>ASC</button>
            <button onClick={sortDescending}>DESC</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
