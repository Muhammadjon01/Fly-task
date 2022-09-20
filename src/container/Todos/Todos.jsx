import React from "react";
import { Button } from "flowbite-react";
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

  const deleteTodo = (id) => {
    let filterTodos = todos.filter((elem) => elem.id !== id);
    setTodos(filterTodos);
  };

  return (
    <div className="bg-blue-700">
      <div className="w-[80%] h-screen sm:ml-20 bg-white-600">
        <div className="lg:w-[50%] ms:m-auto mx-auto">
          <h1 className="text-4xl font-bold py-10 text-center text-white">
            To Do List
          </h1>
          <div className="flex justify-between">
            <input
              className="w-[500px] rounded"
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Add Your Task!"
            />
            <button
              className="rounded text-white bg-cyan-500 hover:bg-cyan-600 p-2"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </div>

        <div className="lg:w-[50%]  bg-white rounded mx-auto py-10">
          <div className="bg-white space-y-2 md:mx-auto mx-auto my-4 px-4">
            {todos.length > 0 &&
              todos.map((elem) => {
                return (
                  <Todo
                    key={elem.id}
                    text={elem.text}
                    deleteTodo={() => deleteTodo(elem.id)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
