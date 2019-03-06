import React from 'react';

const Value = (props) => {
  const {color, number} = props;
  const style = {
    background: `rgba(${color[0]}, ${color[1]}, ${color[2]})`
  };

  return (
    <div style = {style}>
      <h1>{number}</h1>
    </div>
  )
}

export default Value;