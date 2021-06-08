import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const InputBox = styled.input`
border: 2px solid black;
width: 350px;
height: 20px;
padding: 15px;
font-size: 17px;
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