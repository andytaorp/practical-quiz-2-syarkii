import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      packed: false,
    };

    onAddTask(newItem);

    setDescription("");
  };

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={handleDescription}
        placeholder="New Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}