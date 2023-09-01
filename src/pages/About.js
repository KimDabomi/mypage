/**
 * @ File Name: About.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-26 20:10
 * @ Description: About me 페이지
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import emo from '../assets/img/emo.png';
import htmlcss from '../assets/img/htmlcss.png';
import js from '../assets/img/js.png';
import express from '../assets/img/espress.png';
import figma from '../assets/img/figma.png';
import git from '../assets/img/git.png';
import miro from '../assets/img/miro.png';
import mysql from '../assets/img/mysql.png';
import workbench from '../assets/img/MySQLWorkbench.png';
import react from '../assets/img/react.png';
import redux from '../assets/img/redux.png';
import sass from '../assets/img/sass.png';
import mongodb from '../assets/img/MongoDB_Logo.png';
import vscode from '../assets/img/vscode.png';
import node from '../assets/img/노드.png';
import wordpress from '../assets/img/wp-logo.png';

const AboutContainer = styled.div`
    background-color: rgba(0,0,0,.6);
    width: 100%;
    height: 504px;
    position: relative;
    .intro {
        position: absolute;
        left: 30%;
        width: 80%;
        img {
            float: left;
            width: 150px;
            height: 180px;
            margin-right: 20px;
        }
        p {
            margin: 0;
            padding: 25px 0 0 20px;
            color: #ddd;
        }
    }
    .front,.back,.tools {
        position: absolute;
        background-color: #fff4;
        width: 50%;
        img {
            height: 80px;
            margin: 5px;
        }
    }
    .front {
        left: 5%;
        bottom: 40%;
        box-sizing: border-box;
       img {
        &:first-child {
            width: 130px;
        }
       }
    }
    .back {
        left: 5%;
        bottom: 15%;
        img {
            &:nth-child(2),&:nth-child(3) {
                height: 50px;
            }
        }
    }
    .tools {
        width: 35%;
        height: 220px;
        padding-left: 3%;
        box-sizing: border-box;
        right: 5%;
        bottom: 15%;
        img {
            margin: 10px;
        }
    }

`;

const About = memo(() => {
    return (
        <AboutContainer>
            <div className='intro'>
                <img src={emo} alt='emo' />
                <p>사용자의 편의와 서비스의 편리성을 모두 고려할 수 있는<br />
                프론트엔드 개발자가 되고 싶습니다.<br />
                유행에 민감한 프론트엔드 개발 영역에서,<br />
                서비스의 품질을 향상시키기 위해<br />
                항상 새로움을 받아들일 준비가 되어있습니다.</p>
            </div>
            <div className='front'>
                <img src={htmlcss} alt='htmlcss' />
                <img src={js} alt='js' />
                <img src={react} alt='react' />
                <img src={redux} alt='redux' />
                <img src={sass} alt='sass' />
            </div>
            <div className='back'>
                <img src={node} alt='node' />
                <img src={express} alt='express' />
                <img src={mysql} alt='mysql' />
                <img src={mongodb} alt='mongodb' />
            </div>
            <div className='tools'>
                <img src={vscode} alt='vscode' />
                <img src={miro} alt='miro' />
                <img src={figma} alt='figma' />
                <img src={git} alt='git' />
                <img src={workbench} alt='workbench' />
                <img src={wordpress} alt='wordpress' />
            </div>
        </AboutContainer>
    );
});

export default About;