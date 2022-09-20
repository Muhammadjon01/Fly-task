import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete, MdDoneOutline } from "react-icons/md";

function Todo(props) {
  const { text, deleteTodo, completeTodo, isCompleted, editTodoOpen } = props;
  return (
    <div className="w-full flex flex-col bg-[#cecece] rounded">
      <div className="w-full text-start flex flex-wrap justify-between px-3">
        <ul className="my-4 lg:w-[150px]">
          <li style={isCompleted ? { textDecoration: "line-through" } : {}}>
            {text}
          </li>
        </ul>
        <div className="space-x-2 mt-4 items-end text-white">
          <button
            className=" text-green-500"
            onClick={completeTodo}
          >
            <MdDoneOutline size={30} />
          </button>
          <button className="text-blue-500" onClick={editTodoOpen}>
            <AiFillEdit size={30} />
          </button>
          <button className="text-orange-500 rounded-1" onClick={deleteTodo}>
            <MdDelete size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
