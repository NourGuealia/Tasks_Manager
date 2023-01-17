import React from "react";
import { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";
import { HiOfficeBuilding, HiHome } from "react-icons/hi";
import { MdCastForEducation } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";

export const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  const findIcon = (categorie) => {
    switch (categorie) {
      case "Work":
        return (
          <HiOfficeBuilding className="sm:w-12  sm:h-12 w-7 h-7 text-purple-600" />
        );
        break;
      case "Home":
        return <HiHome className="w-12 h-12 text-purple-600" />;
        break;
      case "Education":
        return <MdCastForEducation className="w-12 h-12 text-purple-600" />;
        break;
      case "Fun":
        return <GiPartyPopper className="w-12 h-12 text-purple-600" />;
        break;

      default:
        <HiOfficeBuilding className="w-12 h-12 text-purple-600" />;
        break;
    }
  };
  return (
    <>
      <div className="flex justify-between mb-5 h-22 ">
        <div className=" flex w-16 sm:w-24  mr-2  justify-center items-center shadow-xl  p-3 bg-white rounded-xl border-t border-purple-100   ">
          <i>{findIcon(task.categorie)}</i>
        </div>
        <div className="grid grid-cols-6 gap-2 basis-11/12  shadow-xl  p-3 bg-white rounded-xl border-t border-purple-100 ">
          <div className="col-start-1 col-span-5 text-base sm:text-xl font-bold">
            {task.title}
          </div>
          <div className="col-start-6 flex justify-between ">
            <svg
              className="h-9 w-20 sm:h-9 sm:w-9 sm:p-1 p-0 text-purple-600 rounded-full hover:shadow-md hover:cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => findItem(task.id)}
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />{" "}
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>

            <svg
              className="h-9 w-20 sm:h-9 sm:w-9 p-1 rounded-full text-purple-600 hover:shadow-md hover:cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => removeTask(task.id)}
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </div>

          <div className="col-start-1 col-span-4 text-gray-600">
            {task.description}
          </div>
        </div>
      </div>
    </>
  );
};
