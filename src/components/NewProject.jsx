import { useRef } from "react";
import Input from "./Input";

const NewProject = ({ onAdd }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    //validation ...

    //pass the data to App component - to add to state
    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16 mx-6">
      <menu className="flex items-center justify-end gap-4 my-4 ">
        <li>
          <button className=" bg-cancelBtn text-stone-50 hover:scale-105 px-6 py-2 rounded-md">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-saveBtn text-stone-50 hover:scale-105 px-6 py-2 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" isTextarea />
        <Input type="date" ref={dueDateRef} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
