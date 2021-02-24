import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, taskName: "Shopping", completed: false },
  { id: 2, taskName: "Pay bill", completed: true },
];

function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTask, setNewTask] = useState("");

  const addNew = (title) => {
    if (title === "") return;
    setList([...list, { id: Date.now(), taskName: title, completed: false }]);
    setNewTask("");
  };

  const markCompleted = (itemId) => {
    setList(
      list.map((el) =>
        el.id === itemId ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const clearCompleted = () => {
    setList(list.filter((item) => !item.completed));
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <div className="adding_form">
        <input
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholer="Add to list"
        />
        <button onClick={() => addNew(newTask)}>Add</button>
      </div>
      <div className="taskList">
        {list.map((item, index) => (
          <div
            key={index}
            onClick={() => markCompleted(item.id)}
            className={item.completed ? "completed" : ""}
          >
            {item.taskName}
          </div>
        ))}
      </div>
      <button onClick={() => clearCompleted()} className="clearButton">
        Clear Completed
      </button>
    </div>
  );
}

export default App;
