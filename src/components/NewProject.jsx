import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    //pass the data to App component - to add to state
    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-700 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 mx-6">
        <menu className="flex items-center justify-end gap-4 my-4 ">
          <li>
            <button
              onClick={onCancel}
              className="bg-cancelBtn text-stone-50 hover:scale-105 px-6 py-2 rounded-md"
            >
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
    </>
  );
};

export default NewProject;
