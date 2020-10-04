import React from 'react';

export default function EventDetails(props) {
  return (
    <div className="existing-content-event">
      <div className="truncate">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
