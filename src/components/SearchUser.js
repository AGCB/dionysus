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
      console.log('inside SearchUser\'s handleSubmit..this.props is', this.props);
      console.log('inside SearchUser\'s handleSubmit..this.state.value is', this.state.value);
      this.props.dispatch({type: "SEARCH_USER_NAME", userInput: this.state.value});
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text"
                   name="name"
                   value={this.state.value}
                   onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
}

export default connect(mapStateToProps)(SearchUser)
