import React, { useState } from "react";

const todoList = ["Do React course", "Go Shopping", "Read"];

function Functional() {
  const [todo, setTodo] = useState();

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div style={{ margin: "5px", padding: "5px" }}>
      <h2>Todo List</h2>
      {todoList.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <input
              type="radio"
              id={item}
              name="todo"
              value={key}
              onChange={handleChange}
            />

            <label htmlFor={item}>{item}</label>
            <br />
          </React.Fragment>
        );
      })}

      {todo && <h3>Today I will {todoList[todo]}</h3>}
    </div>
  );
}

export default Functional;
