import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";

export default function TodoItem({
  todo,
  markCompleted,
  deleteTodo,
  updateTodo,
}) {
  const [showEditForm, setShowEditForm] = useState(false);
  return (
    <div className="bg-violet-500 p-5 mt-10 ">
      <div className="text-white">{todo.title}</div>
      <label htmlFor="mark as completed" className="text-white">
        Mark as Completed:
      </label>
      <input
        type="checkbox"
        name="mark as completed"
        id="mark as completed"
        onChange={() => markCompleted(todo.id)}
        defaultChecked={todo.completed ? true : false}
      />
      <div className="flex justify-between w-40 mt-5">
        <button
          onClick={() => setShowEditForm(!showEditForm)}
          className="text-white border p-1 hover:bg-amber-300 hover:text-black"
        >
          Update
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-white border p-1 hover:bg-amber-300 hover:text-black"
        >
          Delete
        </button>

        {/*Edit todo form */}
        <div className="static">
          <div className="absolute">
            {showEditForm && (
              <EditTodoForm
                todo={todo}
                updateTodo={updateTodo}
                showEditForm={showEditForm}
                setShowEditForm ={setShowEditForm}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
