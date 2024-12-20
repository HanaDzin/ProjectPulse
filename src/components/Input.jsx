import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextarea, ...props }, ref) {
  const inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-inputBg text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextarea ? (
        <textarea ref={ref} className={inputClasses} {...props} />
      ) : (
        <input ref={ref} className={inputClasses} {...props} />
      )}
    </p>
  );
});

export default Input;
