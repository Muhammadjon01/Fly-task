import React from "react";
import { useState } from "react";
import Todo from "../../components/Todo/Todo";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

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

  const completeTodo = (id) => {
    let updateTodo = todos.map((elem) => {
      if (elem.id == id) {
        elem.isCompleted = !elem.isCompleted;
        return elem;
      }
      return elem;
    });

    setTodos(updateTodo);
  };

  const allStatus = () => {
    setStatus("all");
  };

  const completeStatus = () => {
    setStatus("complete");
  };

  const activeStatus = () => {
    setStatus("active");
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
          <div className="flex justify-between bg-white text-white px-2 py-4">
            <button
              className="rounded-lg px-2 py-1 bg-blue-500 shadow-lg hover:shadow-blue-500/50"
              onClick={allStatus}
            >
              All
            </button>
            <button
              className="rounded-lg px-2 py-1 bg-blue-500 shadow-lg hover:shadow-blue-500/50"
              onClick={activeStatus}
            >
              Active
            </button>
            <button
              className="rounded-lg px-2 py-1 bg-blue-500 shadow-lg hover:shadow-blue-500/50"
              onClick={completeStatus}
            >
              Complete
            </button>

            <input type="search" placeholder="Search..." className="rounded" />
          </div>
        </div>

        <div className="lg:w-[50%]  bg-white rounded mx-auto py-10">
          <div className="bg-white space-y-2 md:mx-auto mx-auto my-4 px-4">
            {status === "all" &&
              todos.length > 0 &&
              todos.map((elem) => {
                return (
                  <Todo
                    key={elem.id}
                    text={elem.text}
                    isCompleted={elem.isCompleted}
                    deleteTodo={() => deleteTodo(elem.id)}
                    completeTodo={() => completeTodo(elem.id)}
                  />
                );
              })}

            {status === "complete" &&
              todos.length > 0 &&
              todos
                .filter((elem) => elem.isCompleted)
                .map((elem) => {
                  return (
                    <Todo
                      key={elem.id}
                      text={elem.text}
                      isCompleted={elem.isCompleted}
                      deleteTodo={() => deleteTodo(elem.id)}
                      completeTodo={() => completeTodo(elem.id)}
                    />
                  );
                })}
            {status === "active" &&
              todos.length > 0 &&
              todos
                .filter((elem) => !elem.isCompleted)
                .map((elem) => {
                  return (
                    <Todo
                      key={elem.id}
                      text={elem.text}
                      isCompleted={elem.isCompleted}
                      deleteTodo={() => deleteTodo(elem.id)}
                      completeTodo={() => completeTodo(elem.id)}
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
