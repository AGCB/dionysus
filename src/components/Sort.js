import React from 'react'
import { connect } from "react-redux";

import {
  sortAscending,
  sortDescending,
} from '../actions/index';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


 class Sort extends React.Component {
  render() {
    const { dispatch } = this.props;
    console.log(dispatch,'!!!');

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

function mapStateToProps(state) {
  return {
    ...state
  };
}
const mapDispatchToProps = { sortAscending, sortDescending };

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
