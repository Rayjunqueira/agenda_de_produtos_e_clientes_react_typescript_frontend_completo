import styled from 'styled-components';

export const Container = styled.div `
    align-items: center;
    text-align: center;

    img { 
        height: 140px;
    }

    hr {
        margin: 15px;
    }
`;

export const Title = styled.h2 `
    margin: 20px;
`;

export const Desc = styled.h4 `
    margin: 14px;
`;

export const ButtonReturn = styled.button `
    margin: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border-radius: 6px;
    background-color: #ffaa2b;
    height: 34px;
`