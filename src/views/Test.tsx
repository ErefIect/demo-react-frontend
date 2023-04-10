import { useEffect, useState } from "react";
import { Todo, getTodos } from "../utils/request";

function Test() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos()
      .then((res: Todo[]) => setTodos(res))
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
