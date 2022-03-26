import React from "react";
import { ToDoItem } from "../model";
import { SingleTodo } from "./SingleTodo";
import "./styles.css";

interface Props {
  ToDos: ToDoItem[];
  setToDos: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

export const ToDoList: React.FC<Props> = ({ ToDos, setToDos }) => {
  return (
    <div className="todos">
      {ToDos.map((t) => (
        <SingleTodo todo={t} key={t.id} ToDos={ToDos} setToDos={setToDos} />
      ))}
    </div>
  );
};
