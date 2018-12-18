import React from 'react'
import { connect } from 'react-redux';

// material UI imports
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

function mapStateToProps(state) {
  return {
    ...state
  }
}

class Filter extends React.Component {
  render() {
    return (
      <ExpansionPanel >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Filter</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <button onClick={() => {
              this.props.dispatch({type: "TOGGLE_ACTIVE", visibilityFilter: "ACTIVE"});
              }}>ACTIVE</button>
            <button onClick={() => {
              this.props.dispatch({type: "TOGGLE_INACTIVE", visibilityFilter: "INACTIVE"});
              }}>NONACTIVE</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default connect(mapStateToProps)(Filter)
