import React, { useState, useRef, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { ToDoItem } from "../model";
import "./styles.css";

interface Props {
  todo: ToDoItem;
  ToDos: ToDoItem[];
  setToDos: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

export const SingleTodo: React.FC<Props> = ({ todo, ToDos, setToDos }) => {
  const [Edit, setEdit] = useState<boolean>(false);
  const [EditTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setToDos(
      ToDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setToDos(ToDos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setToDos(
      ToDos.map((todo) => (todo.id === id ? { ...todo, todo: EditTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.select();
  }, [Edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {Edit ? (
        <input
          ref={inputRef}
          value={EditTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--edit"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!Edit && !todo.isDone) {
              setEdit(true);
            } else {
              setEdit(false);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
