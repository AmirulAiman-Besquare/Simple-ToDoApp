import React, { useRef } from "react";
import "./styles.css";

interface Props {
  ToDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ ToDo, setToDo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter A Task"
        className="input__box"
        value={ToDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button className="input__submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
