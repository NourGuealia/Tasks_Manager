import React, { useContext, useEffect, useState } from "react";
import { TaskListContext } from "../Context/TaskListContext";
import { MdCastForEducation } from "react-icons/md";

const Form = () => {
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
    } else {
      // case of updating
      editTask(title, description, categorie, editItem.id);
      setTitle("");
      setDescription("");
      setCategorie("Work");
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
    } else {
      setTitle("");
      setDescription("");
      setCategorie("Work");
    }
  }, [editItem]);

  return (
    <>
      <span className="text-gray-400 mb-8 text-sm mt-16">Add new task</span>
      <form
        onSubmit={handleForm}
        className="shadow-sm border-none p-3 bg-white rounded-xl "
      >
        <div className="sm:flex  justify-between mt-1 mb-8  ">
          <input
            className="input w-full sm:w-40  mb-11 sm:mb "
            placeholder="Title"
            value={title}
            onChange={handleTitle}
            required
          />
          <input
            className=" input w-full sm:w-60 mb-11  sm:mb "
            placeholder="Description"
            value={description}
            onChange={handleDescription}
            required
          />
          <select
            className="fa bg-blue-900  pl-2  text-white w-32 h-12 rounded-md"
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
        </div>
        <button
          type="submit"
          className="bg-blue-900 h-12 w-20 rounded-md text-white mr-2"
        >
          Add
        </button>
        <button
          className="bg-blue-900 h-12 w-20 rounded-md text-white"
          onClick={handleClear}
        >
          Clean
        </button>
      </form>
    </>
  );
};

export default Form;
