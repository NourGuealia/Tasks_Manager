import React, { createContext, useEffect, useState } from "react";
import { v1 as uuid } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);

  // update the localStorage wit every tasks changement ( to avoid use the localStorage everywhere) :
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // add a task :
  const addTask = (title, description, categorie) => {
    setTasks([
      ...tasks,
      {
        title: title,
        description: description,
        categorie: categorie,
        id: uuid(),
      },
    ]);
  };

  // remove one task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //remove all
  const removeAll = () => {
    setTasks([]);
  };

  // update a task :
  const [editItem, setEditItem] = useState(null);
  // update a task function
  const editTask = (title, description, categorie, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            title: title,
            description: description,
            categorie: categorie,
            id: id,
          }
        : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };

  // find the task to update
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };
  // find icon :

  const categories = ["Work", "Home", "Education", "Fun"];

  return (
    <TaskListContext.Provider
      value={{
        categories,
        tasks,
        addTask,
        removeTask,
        removeAll,
        editItem,
        editTask,
        findItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
export default TaskListContextProvider;
