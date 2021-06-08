import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputText from './components/InputText'
import './App.css';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {

    setList([
      { title: 'Teste 1', done: true },
      { title: 'Teste 2', done: false },
      { title: 'Teste 3', done: false },
    ]);

    function addAction(newItem) {
      let newList = list;
      newList.push({
        title: newItem,
        done: false
      });

      setList(newList);
    }

  }, [])

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
            <li key={index}>
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
