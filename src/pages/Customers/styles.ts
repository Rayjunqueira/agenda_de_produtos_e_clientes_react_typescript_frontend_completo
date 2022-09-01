import styled from 'styled-components';

export const Container = styled.div `

`;

export const NavContainer = styled.div `
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    margin-left: 190px;

    @media (max-width: 280px ) {
       display: inline;
    }

`;

export const SearchContainer = styled.div `
    margin: 6px;
`;

export const Buttons = styled.div `
    @media (max-width: 280px ) {
        margin: 7px;
    }
`;

export const Products = styled.div `
    margin: 4px;
`;

export const PaginationAction = styled.div `
    align-items: center;
    text-align: center;
`;