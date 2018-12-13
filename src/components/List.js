import React from 'react';

import Card from './Card';

export default function List(props) {
  const { data } = props;
  // I couldn't think of another way to grab the user's name
  // while inside data's second element. So I define a `users`
  // where I grab name. If the names didn't map perfectly to the
  // incrementing ID, then Line-23 wouldn't have worked. 
  //
  const users = data[0].map(x => {
    return x.name
  });

  return (
    <div className="card">
      {data[1].map(x => {
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
