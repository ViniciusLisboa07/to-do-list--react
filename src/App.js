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
      <h1 className="Tit">Lista de tarefas</h1>
      <InputText
        placeholder="Adicione um item..."
        onEnter={addAction}
      />

      <hr></hr>
      <div className="listaItems">
        {list.map((item, index) => {
          return (
            <div className="itemClass" key={index} onClick={() => handleToggleDone(index)}>
              {!item.done &&
                item.title
              }
              {item.done &&
                <del>{item.title}</del>
              }
              <input className="checkboxInput" type="checkbox"></input>
            </div>
          );
        })}
      </div>
    
    </div>
  );
}

export default App;
