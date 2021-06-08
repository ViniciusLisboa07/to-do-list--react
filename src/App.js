import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputText from './components/InputText'
import './App.css';

function App() {
  const [list, setList] = useState([]);
  console.log(list)
  

  function addAction(newItem) {

    let item = { title: newItem, done: false };
    let newList = [...list, item];
    // localStorage.setItem(newItem, false);

    setList(newList);
  };

  function handleToggleDone(index) {
    let newList = [...list];
    newList[index].done = !newList[index].done;

    setList(newList);
  }


  return (
    <div>
      <h1>Lista de tarefas</h1>
      <InputText
        placeholder="Adicione um item..."
        onEnter={addAction}
      />

      <hr></hr>

      <ul className="listaItems">
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => handleToggleDone(index)}>
              {item.done &&
                <del>{item.title}</del>
              }
              {!item.done &&
                item.title
              }
            </li>
          );
        })}
      </ul>
    
    </div>
  );
}

export default App;
