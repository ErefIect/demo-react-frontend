import axios from "axios";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = () => {
  return new Promise<Todo[]>((resolve, reject) => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos",
    })
      .then((res) => resolve(res.data))
      .then((err) => reject(err));
  });
};

