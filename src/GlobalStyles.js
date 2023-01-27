import { createGlobalStyle } from 'styled-components';
import mq from './MediaQuery';
import bg from './assets/img/bg.jpg';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: url(${bg}) no-repeat center top /cover;
        font-family: 'Noto Sans KR', sans-serif;
        ${mq.maxWidth('sm')`
          background-image: none;
          background-color: gray;
        `}
        ${mq.maxWidth('md')`
          background-image: none;
          background-color: gray;
        `}
        ${mq.maxWidth('lg')`
          background-image: none;
          background-color: gray;
        `}
    }
    a {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
