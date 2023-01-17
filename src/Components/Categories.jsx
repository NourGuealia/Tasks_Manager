import React from "react";
import { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";

const Categories = () => {
  const { categories, filter } = useContext(TaskListContext);
  return (
    <div className="w-full  flex flex-col  gap-4">
      <div className="text-gray-400 text-sm  uppercase">Categories</div>

      <div className="w-full h-14  flex  gap-5 items-center justify-center">
        {categories.map((category) => (
          <div
            onClick={() => filter(category)}
            className="px-9 py-4  h-8 flex items-center justify-center  bg-purple-600 text-white rounded-2xl font-semibold hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300 cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
