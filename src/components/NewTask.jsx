import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    //cannot admit empty task
    if (enteredTask.trim() === "") {
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-850"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
