import { Todo } from "../model";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineDoneOutline, MdOutlinePending } from "react-icons/md";
import "./styles.css";
import { FormEvent, useEffect, useRef, useState } from "react";

interface Props {
  todoItem: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todoItem, todos, setTodos }) => {
  const { id, todo, isDone } = todoItem;

  // Edit States
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [textToEdit, setTextToEdit] = useState<string>(todo);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: string) => {
    setTodos(todos.map((i) => (i.id === id ? { ...i, isDone: !i.isDone } : i)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((i) => i.id !== id));
  };

  const handleEdit = (e: FormEvent, id: string) => {
    e.preventDefault();

    setTodos(todos.map((i) => (i.id === id ? { ...i, todo: textToEdit } : i)));

    setOnEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [onEdit]);

  return (
    <>
      <form
        className="todos__single"
        onSubmit={(e) => {
          handleEdit(e, id);
        }}
      >
        {onEdit ? (
          <input
            ref={inputRef}
            type="text"
            value={textToEdit}
            onChange={(e) => setTextToEdit(e.target.value)}
            className="todos__single--text"
          />
        ) : isDone ? (
          <s className="todos__single--text">{todo}</s>
        ) : (
          <span className="todos__single--text">{todo}</span>
        )}

        <div>
          <span
            className="icon"
            onClick={() => (!onEdit && !isDone ? setOnEdit(!onEdit) : null)}
          >
            <FaRegEdit />
          </span>
          <span className="icon" onClick={() => deleteTodo(id)}>
            <FaRegTrashAlt />
          </span>
          <span className="icon" onClick={() => handleDone(id)}>
            {isDone ? <MdOutlineDoneOutline /> : <MdOutlinePending />}
          </span>
        </div>
      </form>
      {onEdit ? (
        <p style={{ color: "white" }}>Edit and press Enter...</p>
      ) : null}
    </>
  );
};

export default TodoItem;
