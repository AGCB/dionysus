import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    ...state
  }
}

class SearchUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({type: "SEARCH_USER_NAME", userInput: this.state.value});
  }

  render() {
    return (
      <form  style={{marginRight: "20px"}}
             onSubmit={this.handleSubmit}>
        <label>
          dispatches action only!!
        <input type="text"
               name="name"
               value={this.state.value}
               onChange={this.handleChange} />
        </label>
        <input type="submit" value=" Don't Use" />
      </form>
    )
  }
}

export default connect(mapStateToProps)(SearchUser)
