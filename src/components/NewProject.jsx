import Input from "./Input";
const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" bg-cancelBtn text-stone-50 hover:scale-105 px-6 py-2 rounded-md">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-saveBtn text-stone-50 hover:scale-105 px-6 py-2 rounded-md">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" isTextarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
