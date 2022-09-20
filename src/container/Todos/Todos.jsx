import React from "react";
import { useState } from "react";
import Todo from "../../components/Todo/Todo";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const addTodo = () => {
    let newTodos = [...todos, { id: new Date().getTime(), text: text }];
    setTodos(newTodos);
    setText("");
  };

  return (
    <div className="bg-blue-700">
      <div className="w-[80%] h-screen bg-white-600">
        <div className="w-[50%] mx-auto">
          <h1 className="text-4xl font-bold py-10 text-center text-white">
            To Do List
          </h1>
          <div className="flex justify-between">
            <input
              className="w-[550px] rounded"
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Add Your Task!"
            />
            <button
              className="text-white rounded px-4 py-2 bg-violet-500 hover:bg-violet-600"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </div>

        <div className="w-[50%] bg-white rounded mx-auto py-10">
          <div className="bg-white space-y-2 mx-auto my-4 px-4">
            {todos.length > 0 &&
              todos.map((elem) => {
                return <Todo key={elem.id} text={elem.text} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
