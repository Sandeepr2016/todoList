import React, { useRef, useState } from 'react';
import Input from './input';
import ListItem from './listItem';

const TodoList = (props) => {
  const textRef = useRef();

  const [todoItem, setTodoVal] = useState([]);
  const onSubmitHandler = () => {
    const todoItemlist = textRef.current.value;
    console.log(textRef.current.value);
    setTodoVal([...todoItem, todoItemlist]);
    textRef.current.value = null;
  };
  const onDeleteHandler = (key) => {
    console.log(key);
    console.log(todoItem);
    const todoItemupdated = todoItem.filter((val, i) => i !== key);
    console.log(todoItemupdated);
    setTodoVal([...todoItemupdated]);
  };

  const todolists = todoItem.map((val, i) => {
    return (
      <li key={i} onClick={() => onDeleteHandler(i)}>
        {val}
      </li>
    );
  });
  return (
    <div>
      <input type="text" ref={textRef} />
      <input type="button" value="Submit" onClick={onSubmitHandler} />
      {/* <input type="button" value="Delete" onClick={onDeleteHandler} /> */}
      <h2>Todo Items</h2>
      <div>
        <ul>{todolists}</ul>
      </div>
    </div>
  );
};

export default TodoList;
