import { useEffect, useState } from "react";
import TodosList from "./components/TodosList";
import CreateTodoForm from "./components/CreateTodoForm";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        const todosData = data.slice(0, 10); //because there are 200 todo in this api
        //console.log(todosData);
        setTodos(todosData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTodos();
  }, []);

  //CRUD
  //Create
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  //Update
  const updateTodo = (todoId, newTitle) => {
    const todosCopy = todos.slice();
    const todoIdx = todosCopy.findIndex((todo) => todo.id === todoId);
    todosCopy[todoIdx].title = newTitle;
    setTodos([...todosCopy]);
  };

  const markCompleted = (todoId) => {
    const todosCopy = todos.slice();
    const todoIdx = todosCopy.findIndex((todo) => todo.id === todoId);
    todosCopy[todoIdx].completed = !todosCopy[todoIdx].completed;
    setTodos([...todosCopy]);
  };

  //Delete
  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="my-10 font-bold text-2xl">Todo App</h1>
      <CreateTodoForm addTodo={addTodo} />
      <TodosList
        todos={todos}
        markCompleted={markCompleted}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </main>
  );
}

export default App;
