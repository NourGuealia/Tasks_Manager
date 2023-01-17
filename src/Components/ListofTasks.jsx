import React, { useContext } from "react";
import { Task } from "./Task";
import { TaskListContext } from "../Context/TaskListContext";
import { useState } from "react";
import { useEffect } from "react";
const ListofTasks = () => {
  const { tasks, removeAll, filtered } = useContext(TaskListContext);

  return (
    <div className="overflow-y-auto min-h-[20rem]  pt-7">
      {tasks.length ? (
        <>
          <div className="flex justify-between items-center mb-2 ">
            <div className="text-gray-400 text-sm  uppercase">All tasks</div>

            <button
              onClick={removeAll}
              className="mr-1 uppercase  shadow-sm p-3 rounded-xl h-12 w-50 hover:shadow-md transition ease-out duration-200 "
            >
              Clear all
            </button>
          </div>
          {filtered.map((task) => {
            return <Task task={task} key={task?.id} />;
          })}
        </>
      ) : (
        <>
          <div className="flex justify-between items-center"></div>
          <div className="text-gray-400 text-sm  uppercase">All tasks</div>
          <div className="text-black uppercase font-body text-3xl items-center font-bold h-full flex justify-center ">
            No tasks
          </div>
        </>
      )}
    </div>
  );
};

export default ListofTasks;
