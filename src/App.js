import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [task, setTask] = useState({
    name: "",
    id: "",
  });

  const [list, setList] = useState([]);

  const changeHandler = (e) => {
    setTask({ ...task, name: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, { ...task, id: uuidv4() }]);
    setTask({ ...task, name: "" });
  };

  const deleteHandler = (id) => {
    setList(list.filter((e) => e.id !== id));
  };
  return (
    <>
      <h1 className="text-center bg-primary text-white p-3 mt-5">To do list</h1>
      <form
        onSubmit={submitHandler}
        className="text-center d-flex justify-content-center mt-5"
      >
        <input
          className="form-control w-50"
          type="text"
          placeholder="Write the task"
          onChange={changeHandler}
          value={task.name}
        ></input>
        <input
          className="form-control btn btn-primary w-25 ms-4"
          type="submit"
          value="Add"
        />
      </form>
      {list.length > 0 ? (
        <ul className="list-group mt-5 px-5">
          {list.map(function (elem, i) {
            return (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between"
              >
                {elem.name}{" "}
                <span
                  onClick={() => {
                    deleteHandler(elem.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <h4 className="text-center mt-5">Sorry no tasks added yet !</h4>
      )}
    </>
  );
};

//JSX - writing javascript in html
//for eg -- <h1>{javascript}</h1>
export default App;
