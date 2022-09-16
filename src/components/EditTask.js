import { useState } from "react";

const EditTask = ({task,onEdit,setShowEditTask}) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit= (e) => {
    e.preventDefault();
    onEdit({text, description,category});
    setShowEditTask(false)
  }
  return (
    <form className="Edit-Form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Edit Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description </label>
        <input
          type="text"
          placeholder="Edit Description "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Category </label>
        <input
          type="text"
          placeholder="Edit Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default EditTask;
