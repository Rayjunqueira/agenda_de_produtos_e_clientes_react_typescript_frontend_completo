import styled from 'styled-components';

export const Container = styled.div `
    display: inline;
    align-items: center;
    text-align: center;
    margin-top: 40px;

    #error {
        p {
            color: red;
        }
    }

    #check {
        p {
            color: green;
        }    
    }
`;

export const Post = styled.fieldset `
`;

export const Desc = styled.textarea `
    font-size: 25px;
    outline: none;

    @media (max-width: 277px ) {
        width: 212px;
    }
`;

export const Input = styled.input `
    font-size: 20px;
    width: 264px;
    margin: 6px;
    outline: none;

    @media (max-width: 277px ) {
        width: 210px;
    }
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
