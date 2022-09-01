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

export const Categories = styled.div `
    margin: 0 10px;
    margin: 6px;
`;

export const AddCategory = styled.div `
    display: flex;
    justify-content: space-around;

`;

export const CategoryButton = styled.button `
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border-radius: 6px;
    background-color: #066a75;
    height: 34px;
    margin: 6px;
    margin-top: 15px;
`;

export const Section = styled.select `
    font-size: 20px;
    width: 264px;
    margin: 6px;
    outline: none;

    @media (max-width: 277px ) {
        width: 210px;
    }
`;

export const RemoveButton = styled.button `
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border-radius: 6px;
    background-color: #be1931;
    height: 34px;
    margin: 6px;
`;

export const FavoriteButton = styled.button `
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border-radius: 6px;
    background-color: #ffaa2b;
    height: 34px;
    margin: 6px;
`;

export const AddButton = styled.button `
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border-radius: 6px;
    background-color: #004aad;
    height: 34px;
    margin: 6px;
`;




export const Products = styled.div `
    margin: 4px;
`;

export const PaginationAction = styled.div `
    align-items: center;
    text-align: center;
    margin: 15px;
`;