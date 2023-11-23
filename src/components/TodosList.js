import React from "react";
import TodoItem from "./TodoItem";

function TodosList({ todos, markCompleted , deleteTodo, updateTodo }) {
  console.log("from TodosList", todos);
  return (
    <div>
      {/* Pending todos*/}
      <section>
        <h2 className="font-bold underline">Pending Todos:</h2>
        {todos.length &&
          todos
            .filter((todo) => todo.completed === false)
            .map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                markCompleted={markCompleted}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}

              />
            ))}
      </section>

      {/* Completed todos */}
      <section>
        <h2 className="font-bold underline">Completed Todos:</h2>
        {todos.length &&
          todos
            .filter((todo) => todo.completed === true)
            .map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                markCompleted={markCompleted}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
      </section>
    </div>
  );
}
export default TodosList;
