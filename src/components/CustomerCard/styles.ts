import styled from 'styled-components';

export const CardContainer = styled.div `
    margin: 10px;
    align-items: center;
    text-align: center;
`;

export const CardSquad = styled.fieldset `
    background-color: #d9d9d9;
    margin: 0 14px;
    height: 160px;

    
    @media (max-width: 277px ) {
        height: 200px;
    }
`;

export const Title = styled.h2 `
    margin-top: 7px;
    font-size: 23px;
`;

export const Desc = styled.h4 `
    font-size: 15px;
`;

export const Actions = styled.div `
    #check {
        margin: 0 6px;
        margin-top: 6px;
        cursor: pointer;
        color: #329B24;
    }

    #edit {
        margin: 0 6px;
        margin-top: 6px;
        cursor: pointer;
        color: #FAC700;
    }

    #remove {
        margin: 0 6px;
        margin-top: 6px;
        cursor: pointer;
        color: #FF4F4B;
    }

    @media (max-width: 277px ) {

    }

`;

export const Link = styled.a `
    cursor: pointer;
`;