import React from 'react'

// material UI imports
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

export default class Filter extends React.Component {
  handleClick() {
    //dispatch an action here....
  }
  render() {

    return (
      <ExpansionPanel style={{maxWidth:"170px"}} >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{marginLeft: "50px"}} >Filter</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography style={{paddingLeft: "20px"}}>
                  <button onClick={this.handleClick}>ACTIVE</button>
                  <button>NONACTIVE</button>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
    )
  }
}
