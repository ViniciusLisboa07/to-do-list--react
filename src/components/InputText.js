import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const InputBox = styled.input`
    background-color: #1F2933;
    color: white;
    border: 1px solid #121212;
    border-radius: 5px;
    width: 350px;
    height: 20px;
    padding: 15px;
    font-size: 17px;
    outline: none;
    `;

function InputText(props) {
    
    const [texto, setTexto] = useState('');

    function handleKeyUp(e) {
        // console.log(e.keyCode)
        if(e.keyCode == 13) {
            if(props.onEnter){
                props.onEnter( texto )
            }
            setTexto('');
        }
    }

    return (
        <InputBox 
            type="text"
            value={texto} 
            placeholder={props.placeholder} 
            onChange={(e) => setTexto(e.target.value)}
            onKeyUp={handleKeyUp}
        />
    );
}

export default InputText;