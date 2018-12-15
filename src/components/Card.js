import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <ul>
          <li>title:{this.props.title}</li>
          <li>comment:{this.props.comment}</li>
          <li>name:{this.props.name}</li>
        </ul>
      </div>
    )
  }
}
