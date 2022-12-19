import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./Components/Form";
import ListofTasks from "./Components/ListofTasks";
import TaskListContextProvider from "./Context/TaskListContext";

function App() {
  return (
    <TaskListContextProvider>
      <div className="bg-gray-100 overflow-y-auto flex flex-col  mx-auto my-8 py-14 px-6 rounded-xl w-full h-[55rem] sm:w-[40rem]">
        <div className="font-body font-bold text-3xl sm:text-5xl">
          Any plan for today!
        </div>

        <Form />

        <ListofTasks />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
