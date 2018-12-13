import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <ul>
        <li>title:{props.title}</li>
        <li>comment:{props.comment}</li>
        <li>name:{props.name}</li>
      </ul>
    </div>
  )
}
