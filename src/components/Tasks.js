import Task from "./Task";
import { Link } from "react-router-dom";
import Button from "./Button";
import EditTask from "./EditTask";

const Tasks = ({ tasks, onToggle, onAdd,onEdit,showEditTask }) => {
  return (
    <>
      <Link to="/add">
        <Button component={Link}  text="+" onClick={onAdd} />
      </Link>
      {tasks.map((task, index) => (
        <>
        <Task key={index} task={task} onToggle={onToggle} onEdit={onEdit}/>
        {/* {showEditTask && <EditTask  />} */}
        </>

      ))}
    </>
  );
};

export default Tasks;
