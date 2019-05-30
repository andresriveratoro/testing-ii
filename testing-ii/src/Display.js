import React from 'react';

const Display = (props) => {
  return (
    <div data-testid='atBat'>
      <div data-testid='strikes'>{props.strikes}</div>
      <div data-testid='balls'>{props.balls}</div>
    </div>
  );
};

export default Display;
