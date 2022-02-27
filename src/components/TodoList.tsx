import { Todo } from "../model";
import TodoItem from "./TodoItem";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      <h2>Todo List: {todos.length}</h2>
      {todos.map((i) => (
        <TodoItem key={i.id} todoItem={i} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
