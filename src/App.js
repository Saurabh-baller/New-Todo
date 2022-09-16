// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from "react";
// import TodoList from "./components/Todo";
// import TodoForm from "./components/TodoForm";
import './App.css';

function App() {

  const getLocalItem = () => {
    let list = localStorage.getItem("list");
    if(list.length > 0){
      return JSON.parse(list);
    }
    else{
      return [];
    }
  }
  
  const [newItem, setnewItem] = useState("");

  const [item, setItem] = useState(getLocalItem);

  const [showEdit, setshowEdit] = useState(-1);



  const[updatedText, setUpdatedText]=useState("");

  console.log(newItem);

  function additem() {
    if (!newItem) {
      alert("Please enter a task");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItem((oldList) => [...oldList, item]);
    setnewItem("");
  }

  function editItem(id, newText) {
    const currentItem = item.filter((item) => item.id === id);
    const newItem = {
      id: currentItem.id,
      value: newText,
    };

    deleteitem(id);
    setItem((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setshowEdit(-1);
  }
  function deleteitem(id) {
    const newArray = item.filter((item) => item.id !== id);
    setItem(newArray);
  }

  function deleteall() {
    setItem([]);
  }
 
  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(item))
   
  },[item])
  return (
    <React.Fragment>
      <h1 className="header" align="center">Todo List</h1>
      <div align="center">
        <input
          type="text"
          placeholder="Type here"
          vaue={newItem}
          onChange={(e) => setnewItem(e.target.value)}
          name="newItem"
        />
      </div>

      <div align="center">
        <button className="btn" onClick={additem}>Add a Task</button>
      </div>
      <ol>
        <div align="center">
          {item.map((item) => {
            return (
              <div className="listing" align="center">
                <li key={item.id} onClick={()=> setshowEdit(item.id)}>
                  {item.value}
                  <button className="remove" onClick={() => deleteitem(item.id)}> Remove</button>
                </li>
                
                {showEdit === item.id ? (
                  <div>
                    <input
                      type="text"
                      onChange={(e) => setUpdatedText(e.target.value)}
                      value={updatedText}
                    />
                    <button className="update" onClick={() => editItem(item.id, updatedText)}>
                      Update task
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </ol>
      <div align="center">
        <button className="deleteAll" onClick={() => deleteall()}>Delete All</button>
      </div>
    </React.Fragment>
  );
}

export default App;
