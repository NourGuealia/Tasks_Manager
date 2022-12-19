import React, { useContext } from "react";
import { Task } from "./Task";
import { TaskListContext } from "../Context/TaskListContext";
const ListofTasks = () => {
  const { tasks, removeAll } = useContext(TaskListContext);

  return (
    <>
      {tasks.length ? (
        <>
          <div className="flex justify-between items-center mt-16 mb-8">
            <div className="text-gray-400 text-sm  uppercase">All tasks</div>

            <button
              onClick={removeAll}
              className="mr-1 uppercase  shadow-sm p-3 rounded-xl h-12 w-50 hover:shadow-md transition ease-out duration-200 "
            >
              Clear all
            </button>
          </div>
          {tasks.map((task) => {
            return <Task task={task} key={task?.id} />;
          })}
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mt-16 mb-8"></div>
          <div className="text-gray-400 text-sm  uppercase">All tasks</div>
          <div className="text-black uppercase font-body text-3xl items-center font-bold h-full flex justify-center ">
            No tasks
          </div>
        </>
      )}
    </>
  );
};

export default ListofTasks;
