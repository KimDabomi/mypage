/**
 * @ File Name: Main.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-26 18:45
 * @ Description: 시작 페이지
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import me from '../assets/img/velog.jpg';

const MainContainer = styled.div`
    background-color: rgba(0,0,0,.6);
    margin: 0;
    padding: 0;
    width: 100%;
    height: 504px;
    position: relative;
    h1 {
        color: #ddd;
        margin: 0;
        float: left;
        position: absolute;
        top: 20%;
        left: 20%;
        span {
            font-weight: 900;
            color: #fff;
        }
    }
    img {
        float: left;
        width: 300px;
        height: 350px;
        position: absolute;
        top: 12%;
        right: 20%;
    }
    p {
        position: absolute;
        bottom: 28%;
        left: 20%;
        clear: both;
        color: #ddd;
    }
`;
const Main = memo(() => {
    return (
        <MainContainer>
            <h1>안녕하세요!<br />
            Front-end Developer를<br />
            꿈꾸는 <span>김다보미</span>입니다.</h1>
            <img src={me} alt='me' />
            <p>Dabomi Kim<br />
            Tel. 010-3341-0934<br />
            Email. cdabomi60@gmail.com</p>
        </MainContainer>
    );
});

export default Main;