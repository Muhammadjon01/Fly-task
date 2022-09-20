import React from "react";

function Todo(props) {
  const { text, deleteTodo, completeTodo, isCompleted } = props;
  return (
    <div className="w-full flex flex-col bg-[#cecece] rounded">
      <div className="text-start flex flex-wrap justify-between px-3">
        <ul className="my-4">
          <li style={isCompleted ? { textDecoration: "line-through" } : {}}>
            {text}
          </li>
        </ul>
        <div className="space-x-2 mt-4 items-end text-white">
          <button
            className="rounded-lg px-2 py-1 bg-green-500 shadow-lg hover:shadow-green-500/50"
            onClick={completeTodo}
          >
            Complete
          </button>
          <button
            className="rounded-lg px-2 py-1 bg-blue-500 shadow-lg hover:shadow-blue-500/50"
            onClick={deleteTodo}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
