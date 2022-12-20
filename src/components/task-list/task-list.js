import React from "react";

import Task from "../task";

import "./task-list.css";

const TaskList = ({ todos }) => {

  const tasks = todos.map(task => {
    const {id, label, status, timeNow} = task;
    if ( status === "editing") {
      return (
        <li className={ status } key={id}>
          <input type="text" class="edit" value="Editing task" />
        </li>
      );
    }
    return (
      <li className={ status } key={id}>
        <Task label={label} status={ status } time={timeNow} />
      </li>
    );
  });

  return (
    <ul className="todo-list">
      { tasks }
    </ul>
  );
};

export default TaskList;