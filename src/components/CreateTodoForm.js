import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function CreateTodoForm({addTodo}) {
    const [title, setTitle]= useState("");

    const handleChange = (e) => setTitle(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            title: title,
            id : uuidv4(),
            completed : false

        };
        //console.log(newTodo);
        addTodo(newTodo);
        setTitle("");
    };

  return (
    <div className="bg-amber-300 p-5 mb-10 rounded">
      <h3>Create a new Todo:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Enter a task :</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Go to the Gym"
          className="p-1"
          value={title}
          onChange={handleChange}
          required
        />
        <input type="submit" value="create" className="mx-1 bg-violet-500 text-white p-1 rounded"/>
      </form>
    </div>
  );
}
