import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { ToDoItem } from "./model";
import { ToDoList } from "./Components/ToDoList";

const App: React.FC = () => {
  const [ToDo, setToDo] = useState<string>("");
  const [ToDos, setToDos] = useState<ToDoItem[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (ToDo) {
      setToDos([...ToDos, { id: Date.now(), todo: ToDo, isDone: false }]);
      setToDo("");
    }
  };
  console.log(ToDos);
  return (
    <div className="App">
      <span className="heading">To-Do App</span>
      <InputField ToDo={ToDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList ToDos={ToDos} setToDos={setToDos} />
    </div>
  );
};

export default App;
