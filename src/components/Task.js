import { FaChevronDown } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa/";
import { useState } from "react";

const Task = ({ task, onToggle, onEdit }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h3 className={`task ${task.done ? "done" : ""}`}>
        {" "}
        {task.text}
        <FaPencilAlt onClick={() => onEdit(task.id)}></FaPencilAlt>
        <FaChevronDown onClick={() => setShowDescription(!showDescription)} />
      </h3>
      {showDescription && <p>{task.description}</p>}
    </div>
  );
};

export default Task;
