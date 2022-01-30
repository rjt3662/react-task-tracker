import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "Feb 5th at 2:30 pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Headphone repair",
      day: "Feb 6th at 2:30 pm",
      reminder: false,
    },
    {
      id: 3,
      text: "New Task",
      day: "Feb 7th at 2:30 pm",
      reminder: true,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log("Add task called with id", id);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const add = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header onAdd={add} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd="addTask" onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
