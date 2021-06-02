import React, { useState, UseEffect } from 'react';
import styled from 'styled-components';
import InputText from './components/InputText'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputText placeholder="props.placeholder"/>
    </div>
  );
}

export default App;
