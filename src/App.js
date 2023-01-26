import React, { memo } from "react";
import { Link } from "react-scroll";
import TopButton from "./components/TopButton";
// import Header from "./components/Header";
// import Main from "./pages/Main";
// import About from "./pages/About";
// import Project from "./pages/Project";

// 이미지 
import me from './assets/img/velog.jpg';
import emo from './assets/img/emo.png';
import htmlcss from './assets/img/htmlcss.png';
import js from './assets/img/js.png';
import express from './assets/img/espress.png';
import figma from './assets/img/figma.png';
import git from './assets/img/git.png';
import velog from './assets/img/velog.jpg';
import miro from './assets/img/miro.png';
import mybatis from './assets/img/mybatis.png';
import mysql from './assets/img/mysql.png';
import workbench from './assets/img/MySQLWorkbench.png';
import react from './assets/img/react.png';
import redux from './assets/img/redux.png';
import sass from './assets/img/sass.png';
import ubuntu from './assets/img/ubuntu-logo.png';
import vmware from './assets/img/vmware.png';
import vscode from './assets/img/vscode.png';
import node from './assets/img/노드.png';
import styled from "styled-components";

const MiddleDiv = styled.div`
    height: 504px;
`;
const HeaderContainer = styled.div`
position: fixed;
top: 0;
margin: 0;
padding-top: 20px;
position: fixed;
top: 0;
z-index: 9999;
width: 100%;
height: 60px;
.wrap {
  position: relative;
  .links {
    position: absolute;
    left: 2%;
    top: 30%;
  }
  .blanks {
    position: absolute;
    right: 2%;
    top: 20%;
  }
}

.about,
.project {
  color: white;
  margin-right: 30px;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.git {
  margin-right: 10px;
}
`;
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

const App = memo(() => {

  return (
    <div>
      <MiddleDiv>
        <HeaderContainer>
          <div className="wrap">
            <div className="links">
              <Link to="about" className="about" spy={true} smooth={true}>
                About Me
              </Link>
              <Link to="/project" className="project">
                Project
              </Link>
            </div>
            <div className="blanks">
              <a
                href="https://github.com/KimDabomi"
                target="_blank"
                className="git"
              >
                <img src={git} alt="git" />
              </a>
              <a
                href="https://velog.io/@cdabomi60"
                target="_blank"
                className="velog"
              >
                <img src={velog} alt="velog" />
              </a>
            </div>
          </div>
        </HeaderContainer>
        <MainContainer>
            <h1>안녕하세요!<br />
            Front-end Developer를<br />
            꿈꾸는 <span>김다보미</span>입니다.</h1>
            <img src={me} alt='me' />
            <p>Dabomi Kim<br />
            Tel. 010-3341-0934<br />
            Email. cdabomi60@gmail.com</p>
        </MainContainer>
        <AboutContainer id='about'>
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
                <img src={mybatis} alt='mybatis' />
                <img src={ubuntu} alt='ubuntu' />
            </div>
            <div className='tools'>
                <img src={vscode} alt='vscode' />
                <img src={miro} alt='miro' />
                <img src={figma} alt='figma' />
                <img src={git} alt='git' />
                <img src={vmware} alt='vmware' />
                <img src={workbench} alt='workbench' />
            </div>
        </AboutContainer>
        <TopButton />
      </MiddleDiv>
    </div>
  );
});

export default App;
