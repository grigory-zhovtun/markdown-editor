import React, { useState } from 'react';
import Input from '../input/Input';
import styled from "styled-components";
import View from '../view/View';

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background: papayawhip;
    display: flex;
`;

const App = () => {
    let [value, setValue] = useState('')

    const updateText = (newText: string) => {
        setValue(newText)
    }
    return (
        <Wrapper>
            <Input text={value} callback={updateText}/>
            <View text={value}/>
        </Wrapper>
    );
};

export default App;