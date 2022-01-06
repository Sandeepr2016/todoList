import React from 'react';

const ListItem = (props) => {
  return (
    <React.Fragment>
      <li>{props.name}</li>
    </React.Fragment>
  );
};

export default ListItem;
