import styled from 'styled-components';

export const Container = styled.div `
    align-items: center;
    text-align: center;
    margin-top: 25px;

    p {
        color: green;
    }
`;

export const Title = styled.h2 `
    margin: 36px;
`;

export const Desc = styled.h5 `
    margin: 17px;
`;

export const Buttons = styled.div `
    margin: 90px;
`;

export const Edit = styled.button `
    margin: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border-radius: 6px;
    background-color: #ffaa2b;
    height: 34px;
`;

export const Remove = styled.button `
    margin: 7px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border-radius: 6px;
    background-color: red;
    height: 34px;
`;

export const Favorite = styled.button `
    margin: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border-radius: 20px;
    background-color: #ffaa2b;
    height: 55px;
    width: 100px;
`;