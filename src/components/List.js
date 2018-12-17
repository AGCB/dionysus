import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function mapStateToProps(state) {
  return {
  ...state
  }
}

class List extends React.Component {
  render() {
    const users = this.props.users.map(x => {
      return x.name;
    })
    return (
      <div className={this.props.sortascending?"ascending-order":"descending-order"}>
        {this.props.posts.map(x => {
          return (
            <Card key={x.id}
                  title={x.title}
                  comment={x.body}
                  name={users[x.userId-1]}
                  className="card"/>
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps)(List)
