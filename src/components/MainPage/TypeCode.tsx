import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react'
import styled from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';

const TypeCode = () => {

    const [codeData, setCodeData] = useState<{code: string}>({
        code: ""
    });

    const onChangeCodeTypeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event?.target;
        setCodeData({
            ...codeData,
            [name]: value
        });
    };

    const onSubmitCodeTypeHandler = (event : FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCodeData({
            ...codeData,
            code: ""
        });
    };

    return (
        <TypeCodeContainer typeof='onSubmit' onSubmit={onSubmitCodeTypeHandler}>
            <CodeInput
                type='text'
                name='code'
                autoComplete='off'
                value={codeData.code}
                placeholder='친구의 초대코드를 받아 커스텀게임에 참여하세요.'
                onChange={onChangeCodeTypeHandler}/>
            <JoinButton
                type='submit'
                width='60px'
                height='32px'
                color='#FFFFFF'
                onClick={onSubmitCodeTypeHandler}>
                    참여
            </JoinButton>
        </TypeCodeContainer>
    )
};

const TypeCodeContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 16px;
`;

const CodeInput = styled.input`
    width: 60%;
    height: 28px;
    background-color: #F4F4F4;
    color: #222020;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    line-height: 100%;
    border-radius: 3px;
    outline: none;
    border: 2px solid #F4F4F4;
    padding: 0px 16px;

    &::placeholder {
        color: #6A6A6A;
        font-weight: 400;
        font-size: 12px;
    }

    &:hover {
        border: 2px solid #f0be73;
    }

    &:focus {
        border: 2px solid #d4b27f;
    }
`;

const JoinButton = styled(StBasicButton)`
    font-size: 18px;

    &:active {
        box-shadow: #74532280 0px 2px 2px 1px;
        font-size: 16px;
    }
`;

export default TypeCode;