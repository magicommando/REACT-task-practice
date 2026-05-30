import { useState } from "react";
import './Todo.css';

function Todo() {
   const [task, setTask] = useState("");
   const [tasks, setTasks] = useState([]);
    
   function addTask() {
    if (task.trim() === "") {
       alert("Please enter a task");
       return;
    }
       setTasks([...tasks, task]);
       setTask("");
 }

function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
}

return (
    <div className="container">
        <h1>To-Do List</h1>
        <input
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <div className="task-list">
            {tasks.map((item, index) => (
                <div key={index} className="task-item">
                    <p>{item}</p>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
            ))}
        </div>
    </div>
);
}
export default Todo;