import React from 'react';

export default class SearchUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <div className="searchUserName">
          <form className="form"
                style={{backgroundColor:"white",
                        fontSize:"10px",
                        maxWidth: "100px"}}
                onSubmit={this.handleSubmit} >
            <label style={{backgroundColor:"white"}}>
              Name:
              <input style={{backgroundColor:"white"}}
                     type="text"
                     value={this.state.value}
                     onChange={this.handleChange} />
            </label>
            <input style={{backgroundColor:"white"}}
                   type="submit"
                   value="Submit" />
          </form>
        </div>

      );
    }
  }
