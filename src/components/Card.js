import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <ul>
          <li>
            <span className="bullets">title: &nbsp;</span>
            {this.props.title}
          </li>
          <li>
            <span className="bullets">comment: &nbsp;</span>
            {this.props.comment}
          </li>
          <li>
            <span className="bullets">name: &nbsp;</span>
            {this.props.name}
          </li>
        </ul>
        <hr></hr>
      </div>
    )
  }
}
