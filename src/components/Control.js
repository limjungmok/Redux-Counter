import React from 'react';

const Control = (props) => {
  const { handleIncrement, handleDecrement, handleRandomize } = props;
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleRandomize}>Randomize color</button>
    </div>
  );
}

export default Control;