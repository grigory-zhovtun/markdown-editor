import React, {ChangeEvent} from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    height: 600px;
`
const Textarea = styled.textarea`
    height: 80vh;
    width: 400px;
    margin-right: 10px;
`
type InputPropsTyps = {
    text: string
    callback: (newValue: string)=> void
}

const Input = ({text, callback}: InputPropsTyps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        callback(e.currentTarget.value)
    }

    return (
        <InputWrapper>
            <Textarea
                value={text}
                onChange={onChangeHandler}
                placeholder='input text'
            ></Textarea>
        </InputWrapper>
    );
};

export default Input;