import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Categories from "./Categories";
import Form from "./Form";
import ListofTasks from "./ListofTasks";

const MainFile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-14  mx-auto my-8 py-14 px-6  rounded-xl w-full h-[55rem] sm:w-[40rem] relative shadow-xl ">
      <div className="font-body font-bold text-3xl sm:text-5xl mb-7">
        be productive...
      </div>
      <Categories />
      <Form open={open} setOpen={setOpen} />

      <ListofTasks />
      <div className="absolute flex items-center justify-center left-0 bottom-0 h-16 w-full rounded-xl bg-gray-200 ">
        <span
          onClick={() => setOpen(true)}
          className=" shadow-md bg-purple-600 border-4 border-gray-100 rounded-full h-16 w-16 flex justify-center items-center absolute -top-5  hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300 cursor-pointer"
        >
          <AiOutlinePlus color="white" size={20} />
        </span>
      </div>
    </div>
  );
};

export default MainFile;
