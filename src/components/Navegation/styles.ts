import styled from 'styled-components';

export const Navegation = styled.nav `
    display: flex;
    margin-top: 5px;
    align-items: center;
    text-align: center;
    background-color: #ebebeb;
    margin: 0;
`;

export const Logo = styled.div `
`;

export const Title = styled.h3 `
    cursor: pointer;
    margin: 4px;
`;

export const Links = styled.div `
    display: flex;
    letter-spacing: 0.1rem;
`;

export const Link = styled.a `
    margin: 15px;
    cursor: pointer;
    text-decoration: none;

    a:visited {
      text-decoration: none;       
    }
`;