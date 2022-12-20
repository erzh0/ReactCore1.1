import React from "react";

import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import Footer from "../footer";

import "./app.css";

const App = () => {
  const taskList = [
    {id: 1, timeNow: Date.now(), label: 'Completed task', status: 'completed'}, 
    {id: 2, timeNow: Date.now(), label: 'Editing task', status: 'editing'}, 
    {id: 3, timeNow: Date.now(), label: 'Active task', status: ''}
  ];

  return (
    <section className="todoapp">
      <header>
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={taskList} />
        <Footer />
      </section>
    </section>
  );
};

 export default App;