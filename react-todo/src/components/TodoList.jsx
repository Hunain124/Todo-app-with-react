import React from "react";

const TodoList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => removeTask(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
