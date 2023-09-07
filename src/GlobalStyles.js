import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: gray;
        font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
