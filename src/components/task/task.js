import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';


const Task = (props) => {
  const lastTime = new Date(props.time);
  const result = formatDistanceToNow(
    new Date(lastTime.getFullYear(), lastTime.getMonth(), lastTime.getDate(), lastTime.getHours(), lastTime.getMinutes(), lastTime.getSeconds()),
    {includeSeconds: true}
  )
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={props.status === 'completed' ? true : false} />
      <label>
        <span className="description">{props.label}</span>
        <span className="created">created {result} ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
};

export default Task;