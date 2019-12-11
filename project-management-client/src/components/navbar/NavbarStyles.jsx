import styled from 'styled-components';

const NavBar = styled.div`
    background-color: lightblue;
    
    ul {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        text-decoration: none;
    }

    li {
        padding-right: 1rem;
    }

    a {
        text-decoration: none;
    }
    
`;
export default NavBar