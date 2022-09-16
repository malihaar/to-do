import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

function App() {
  const APP_ID = "bb8a7ee0";
  const APP_KEY = "9efed7cfdbde26da1f1e707baf61296c";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}§`
    )
      .then((response) => {
        // ...
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //Add Task
  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //Edit Task
  const editTask = async (task) => {
    setShowEditTask(!showEditTask);
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
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Tasks
                tasks={tasks}
                onToggle={toggleDone}
                onEdit={editTask}
                setShowEditTask={setShowEditTask}
                showEditTask={showEditTask}
              />
            }
          />
          <Route path="/add" element={<AddTask onAdd={addTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
