import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const Todo = () => {
  // let val;
  let [val, setval] = useState("");
  let [list, setList] = useState([]);
  const handleChange = (e) => {
    setval(e.target.value);
    console.log(val);
  };
  const addList = () => {
    const item = { val, status: "active" };
    setList([...list, item]);
    // setval("");
  };
  const completeItem = (key) => {
    console.log(list);
    // const item = { val, status: "complete" };
    let statusList = list.map((item) => {
      // if (item.status === "completed") {
      //   return item;
      // }

      return item;
    });
    console.log(statusList, "List");
    let item = list[key].status;
    console.log(key + " key , list item = " + item);
    item.status = "completed";
    console.log(list.key + "item");
    console.log(list);
    console.log(item, "item status");
    setList(statusList);
  };
  const deleteList = () => {
    setList(list.pop());
  };
  const deletiem = (key) => {
    const updatedList = list.filter(function (item, index) {
      return index !== key;
    });
    setList(updatedList);
  };
  return (
    <div>
      <h2> TODO APP</h2>
      <TextField
        id="standard-basic"
        label="Standard"
        placeholder="add note"
        onChange={handleChange}
        value={val}
      />
      <div className="buttons">
        <button onClick={addList}> Add</button>
        <button>Complete</button>
      </div>
      <div className="listWrapper">
        <ul>
          {list.map((item, index) => {
            return (
              <li className="item" id={index} key={index}>
                {item.val} - {item.status}
                <button onClick={() => deletiem(index)}> delete</button>
                <button onClick={() => completeItem(index)}>
                  {" "}
                  {item.status}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
