import React, { useContext, useEffect, useState } from "react";
import { TaskListContext } from "../Context/TaskListContext";
import { MdCastForEducation } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
const Form = ({ open, setOpen }) => {
  const { addTask, editTask, editItem, categories } =
    useContext(TaskListContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("Work");
  const handleForm = (e) => {
    e.preventDefault();
    // case of adding :
    if (!editItem) {
      addTask(title, description, categorie);
      setTitle("");
      setDescription("");
      setCategorie("Work");
      setOpen(false);
    } else {
      // case of updating
      editTask(title, description, categorie, editItem.id);
      setTitle("");
      setDescription("");
      setCategorie("Work");
      setOpen(false);
    }
  };
  const handleTitle = (e) => {
    e.preventDefault;
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    e.preventDefault;
    setDescription(e.target.value);
  };
  const handleCategorie = (e) => {
    e.preventDefault;
    setCategorie(e.target.value);
  };
  const handleClear = () => {
    setTitle("");
    setDescription("");
    setCategorie("Work");
  };

  // if there is an item to update :
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setDescription(editItem.description);
      setCategorie(editItem.categorie);
      setOpen(true);
    } else {
      setTitle("");
      setDescription("");
      setCategorie("Work");
      setOpen(false);
    }
  }, [editItem]);

  return (
    <div
      className={
        open
          ? "w-full h-full  bg-gray-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-opacity-50 "
          : "hidden"
      }
    >
      <div className=" w-full mx-24 shadow-sm border-none p-3 bg-white rounded-xl flex flex-col  ">
        <div className="flex items-center justify-end mb-2 cursor-pointer ">
          <GiCancel color="black" size={24} onClick={() => setOpen(false)} />
        </div>

        <form onSubmit={handleForm} className="w-full flex flex-col">
          <input
            className="input  w-full sm:w-96  mb-11 sm:mb"
            placeholder="Title"
            value={title}
            onChange={handleTitle}
            required
          />
          <input
            className=" input w-full sm:w-96 mb-11  sm:mb "
            placeholder="Description"
            value={description}
            onChange={handleDescription}
            required
          />
          <select
            className="fa bg-purple-600  pl-2  text-white w-56 h-12 rounded-md"
            value={categorie}
            onChange={handleCategorie}
          >
            {categories.map((categorie, index) => {
              return (
                <option key={index} value={categorie}>
                  {categorie}
                </option>
              );
            })}
          </select>
          <div className="sm:flex  justify-between  mb-8   mt-2">
            <button
              type="submit"
              className="bg-purple-600 h-12 w-20 rounded-md text-white mr-2"
            >
              Add
            </button>
            <button
              className="bg-purple-600 h-12 w-20 rounded-md text-white"
              onClick={handleClear}
            >
              Clean
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
