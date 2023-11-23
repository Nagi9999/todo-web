import { useState } from "react";

export default function EditTodoForm({
  todo,
  updateTodo,
  setShowEditForm,
  showEditForm,
}) {
  const [title, setTitle] = useState(todo.title);

  return (
    <div className="bg-amber-300 p-5 rounded">
      <h3 className="font-bold">Update Todo</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateTodo(todo.id, title);
          setShowEditForm(!showEditForm);
          //TODO> close the edit form
        }}
      >
        <label className="font-bold" htmlFor="title">
          Enter a task{" "}
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          className="p-1"
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="submit"
          value="update"
          className="mx-1 bg-violet-500 text-white p-1 rounded"
        />
      </form>
    </div>
  );
}
