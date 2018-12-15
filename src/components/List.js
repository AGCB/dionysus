//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
    const users = this.props[0].map(x => {
      return x.name;
    })
    console.log('in my render this.props is...', this.props)
    return (
      <div className="card">
        {this.props[1].map(x => {
          return (
            <Card key={x.id}
                  title={x.title}
                  comment={x.body}
                  name={users[x.userId-1]}
            />
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps)(List)
