import React, { useState, UseEffect } from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
    border: 2px solid black;
    widht: 300px;
    height: 30px;
    padding: 15px;
    font-size: 17px;
`;

function InputText(props) {
   return (
    <InputBox type="text" placeholder={props.placeholder} />
   );
}

export default InputText;