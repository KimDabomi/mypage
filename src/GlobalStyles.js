import { createGlobalStyle } from 'styled-components';
import bg from './assets/img/bg.jpg';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: url(${bg}) no-repeat center top /cover;
        font-family: 'Noto Sans KR', sans-serif;

    }
    a {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
