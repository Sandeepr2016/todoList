import React from 'react';

const Input = (props) => {
  return (
    <React.Fragment>
      <input type={props.type} value={props.value} />
    </React.Fragment>
  );
};

export default Input;
