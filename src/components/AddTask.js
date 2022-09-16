import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  

  const onSubmit= (e) => {
    e.preventDefault();
    if(!text) {
        alert('text empty!')
        return
    }
    onAdd({text, description,category})
    setText('')
    setDescription('')
    setCategory('')
    navigate('/')
  }
  return (
    <form className="add-Form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description </label>
        <input
          type="text"
          placeholder="Add Description "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Category </label>
        <input
          type="text"
          placeholder="Add Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
