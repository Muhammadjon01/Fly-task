import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import Todo from "../../components/Todo/Todo";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [editText, setEditText] = useState("");
  const [idx, setIdx] = useState(null);
  const [editModal, setEditModal] = useState(false);

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

  const sortTodos = () => {
    todos.sort(function (a, b) {
      const nameA = a.text.toUpperCase();
      const nameB = b.text.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
    setTodos(todos);
  };

  const editTodoOpen = (id) => {
    setIdx(id);
    setEditText(todos.find((elem) => elem.id === id).text);
    setEditModal(true);
  };

  const editTodo = () => {
    setTodos((prev) => [
      ...prev.map((elem) => {
        if (elem.id === idx) {
          elem.text = editText;
          return elem;
        }
        return elem;
      }),
    ]);
    setEditModal(false);
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

  useEffect(() => {}, [search]);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-[80%] h-screen bg-white-600  m-auto">
        <div className="lg:w-[50%] ms:m-auto mx-auto">
          <h1 className="text-4xl font-bold py-10 text-center text-white">
            To Do List
          </h1>
          <div className="flex justify-between">
            <input
              className="w-full rounded"
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
          <div className="flex justify-between space-x-4 bg-white text-black px-2 py-4 border-b-2">
            <div className="flex  space-x-2">
              <button
                className="rounded-lg px-2 py-1  hover:bg-gray-500/50"
                onClick={allStatus}
              >
                All
              </button>
              <button
                className="rounded px-2 py-2   hover:bg-gray-500/50"
                onClick={activeStatus}
              >
                Active
              </button>
              <button
                className="rounded px-2 py-1   hover:bg-gray-500/50"
                onClick={completeStatus}
              >
                Complete
              </button>
              <button
                className="rounded px-3 py-1   hover:bg-gray-500/50"
                onClick={sortTodos}
              >
                Sort
              </button>
            </div>

           
            <input
              type="search"
              name="search"
              placeholder="Search..."
              className="w-[50%] lg:w-[30%] rounded text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <Modal
          title="Edit To Do"
          open={editModal}
          onOk={editTodo}
          onCancel={() => setEditModal(false)}
        >
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </Modal>

        <div className="lg:w-[50%]  bg-white rounded mx-auto py-5">
          <div className="bg-white space-y-2 md:mx-auto mx-auto my-4 px-4">
            <h1 className="text-4xl font-bold border-b-2">Your Tasks</h1>
            {search === "" &&
              status === "all" &&
              todos.length > 0 &&
              todos.map((elem) => {
                return (
                  <Todo
                    key={elem.id}
                    text={elem.text}
                    isCompleted={elem.isCompleted}
                    deleteTodo={() => deleteTodo(elem.id)}
                    completeTodo={() => completeTodo(elem.id)}
                    editTodoOpen={() => editTodoOpen(elem.id)}
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
                      editTodoOpen={() => editTodoOpen(elem.id)}
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
                      editTodoOpen={() => editTodoOpen(elem.id)}
                    />
                  );
                })}

            {search.length > 0 &&
              todos.length > 0 &&
              todos
                .filter((elem) =>
                  elem.text.toLowerCase().includes(search.toLowerCase())
                )
                .map((elem) => {
                  return (
                    <Todo
                      key={elem.id}
                      text={elem.text}
                      isCompleted={elem.isCompleted}
                      deleteTodo={() => deleteTodo(elem.id)}
                      completeTodo={() => completeTodo(elem.id)}
                      editTodoOpen={() => editTodoOpen(elem.id)}
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
