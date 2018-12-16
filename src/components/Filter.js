
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
    // console.log('in `Filter`\'s render, this.props is...', this.props)

    return (
      <ExpansionPanel style={{maxWidth:"170px"}} >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{marginLeft: "50px"}} >Filter</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography style={{paddingLeft: "20px"}}>
                  <button onClick={() => {
                      this.props.dispatch({type: "TOGGLE_ACTIVE"});
                    }}>ACTIVE</button>
                  <button onClick={() => {
                      this.props.dispatch({type: "TOGGLE_INACTIVE"});
                    }}>NONACTIVE</button>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
    )
  }
}

export default connect(mapStateToProps)(Filter)
