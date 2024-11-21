const Input = ({ label, isTextarea, ...props }) => {
  const inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-inputBg text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          className={inputClasses}
          {...props}
        />
      ) : (
        <input className={inputClasses} {...props} />
      )}
    </p>
  );
};

export default Input;
