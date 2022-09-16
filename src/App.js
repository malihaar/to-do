import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";


function App() {
  const [showEditTask, setShowEditTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Buy Milk",
      description: "3 strawberry milks, 1 chocolate milk",
      category: "Groceries",
      done: false,
    },
    {
      id: 2,
      text: "Pickup dry cleaning",
      description: "Dont forget to pick up dry cleaning",
      category: "Errands",
      done: true,
    },
  ]);

  //Add Task
  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //Edit Task
  const editTask = async (task,id) => {
    console.log("edit task", task);
    console.log("edit id", id);
    setShowEditTask(!showEditTask);
    console.log(showEditTask)
    // this.id =id;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Toggle done
  const toggleDone = async (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">

        <Header/>
        {showEditTask && <EditTask onEdit={()=>setShowEditTask===true} setShowEditTask={setShowEditTask}/>}

        <Routes>
          <Route
            path="/"
            element={<Tasks tasks={tasks} onToggle={toggleDone} onEdit={editTask} />}
          />
          <Route path="/add" element={<AddTask onAdd={addTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
