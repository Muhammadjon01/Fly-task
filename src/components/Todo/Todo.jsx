import React from "react";

function Todo(props) {
  const { text } = props;
  return (
    <div className="w-full flex flex-col bg-[#cecece] rounded">
      <div className="text-start flex flex-row justify-between px-3">
        <ul className="my-4">
          <li>{text}</li>
          
        </ul>
        <div className="space-x-2 mt-4 items-end">
            <button className="rounded p-1 bg-green-500">Complite</button>
            <button className="rounded p-1 bg-red-800">Delete</button>
          </div>
      </div>
    </div>
  );
}

export default Todo;
