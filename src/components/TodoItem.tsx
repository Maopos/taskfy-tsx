import { Todo } from "../model";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineDoneOutline, MdOutlinePending } from "react-icons/md";
import "./styles.css";

interface Props {
  todoItem: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todoItem, todos, setTodos }) => {
  //
  const { id, todo, isDone } = todoItem;

  const handleDone = (id: string) => {
    setTodos(todos.map((i) => (i.id === id ? { ...i, isDone: !i.isDone } : i)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((i) => i.id !== id));
  };

  return (
    <form className="todos__single">
      {isDone ? (
        <s className="todos__single--text">{todo}</s>
      ) : (
        <span className="todos__single--text">{todo}</span>
      )}

      <div>
        <span className="icon">
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
  );
};

export default TodoItem;
