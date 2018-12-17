import React from 'react'
import '../App.css';

// material UI imports
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


export default class Sort extends React.Component {
  render() {
    const { sortByASC, sortByDESC } = this.props;
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{marginLeft: "30px"}}>Sort</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <button onClick={sortByASC}>ASC</button>
              <button onClick={sortByDESC}>DESC</button>
            </Typography>
           </ExpansionPanelDetails>
         </ExpansionPanel>
       </div>
    )
  }
}
