import React, { useState } from "react";
import ToDoLists from "./ToDolist";
import "./App.css";

const App = () => {
  const [inputlist, setinputlist] = useState();
  const [items, setitems] = useState([]);

  const iteamevent = (event) => {
    setinputlist(event.target.value);
  };

  const listofiteams = () => {
    setitems((olditems) => {
      return [...olditems, inputlist];
    });
    setinputlist("");
  };

  const deleteitems = (id) => {
    // console.log("deleted");
    setitems((olditems) => {
      return olditems.filter((arrelem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputlist}
            onChange={iteamevent}
          />
          <button onClick={listofiteams}> +</button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteitems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
