import styled from "styled-components";

export const Container = styled.div `
    display: inline;
    align-items: center;
    text-align: center;

    p {
        color: green;
    }
`;

export const Post = styled.fieldset `
    margin-top: 90px;
`;

export const Categories = styled.select `
    font-size: 20px;
    width: 264px;
    margin: 6px;
    outline: none;

    @media (max-width: 277px ) {
        width: 210px;
    }
`;

export const Add = styled.div `
    align-items: center;
    text-align: center;
    margin: 6px;
`;