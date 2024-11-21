import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-sidebarBg text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl">
        Your Projects
      </h2>
      <div>
        <button className="bg-[#FFF6EA] px-4 py-2 text-xs md:text-base rounded-md text-stone-600 hover:bg- hover:text-stone-900 hover:scale-105">
          + Add project
        </button>
      </div>
      <ul>...</ul>
    </aside>
  );
};

export default Sidebar;
