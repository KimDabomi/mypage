import React, { memo } from "react";
import { Link } from "react-scroll";
import { NavLink} from "react-router-dom";
import styled from "styled-components";
import TopButton from "./components/TopButton";

// 반응형
import mq from "./MediaQuery";

// 이미지
import me from "./assets/img/me.jpg";
import emo from "./assets/img/emo.png";
import htmlcss from "./assets/img/htmlcss.png";
import js from "./assets/img/js.png";
import express from "./assets/img/espress.png";
import figma from "./assets/img/figma.png";
import git from "./assets/img/git.png";
import velog from "./assets/img/velog.jpg";
import miro from "./assets/img/miro.png";
import mybatis from "./assets/img/mybatis.png";
import mysql from "./assets/img/mysql.png";
import workbench from "./assets/img/MySQLWorkbench.png";
import react from "./assets/img/react.png";
import redux from "./assets/img/redux.png";
import sass from "./assets/img/sass.png";
import ubuntu from "./assets/img/ubuntu-logo.png";
import vmware from "./assets/img/vmware.png";
import vscode from "./assets/img/vscode.png";
import node from "./assets/img/노드.png";
import sev from "./assets/img/sev.gif";
import weather from "./assets/img/weather.gif";
import clone01 from "./assets/img/clone01.jpg";
import clone02 from "./assets/img/clone02.jpg";
import clone03 from "./assets/img/clone03.jpg";
import clone04 from "./assets/img/clone04.jpg";
import clone05 from "./assets/img/clone05.jpg";

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
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0;
  padding-top: 60px;
  width: 100%;
  height: 504px;
  .mainwrap {
    width: 700px;
    margin: 60px auto;
    display: flex;
    flex-wrap: wrap;
    h1 {
      color: #ddd;
      margin: 40px 40px 40px 0;
      span {
        font-weight: 900;
        color: #fff;
      }
    }
    img {
      width: 300px;
      height: 350px;
      box-shadow: 5px 5px 5px #0007;
    }
    p {
      color: #ddd;
    }
  }
  ${mq.maxWidth("sm")`
    height: 450px;
    img {
      display: none;
    }
    .mainwrap {
      width: 68%;
    }
  `}
`;
const AboutContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 510px;
  position: relative;
  padding-bottom: 80px;
  .intro {
    width: 550px;
    margin: auto;
    padding: 30px 0;
    img {
      float: left;
      width: 150px;
      height: 180px;
      margin: 0 20px 40px 0;
    }
    p {
      padding: 25px 0 0 20px;
      color: #ddd;
    }
  }
  .skills {
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    .left {
      width: 62%;
      margin-right: 20px;
      .front {
        background-color: #fff4;
        width: 100%;
        height: 120px;
        padding: 15px 0 0 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
        img {
          height: 80px;
          margin: 5px;
          &:first-child {
            width: 130px;
          }
        }
      }
      .back {
        background-color: #fff4;
        width: 100%;
        height: 120px;
        padding: 10px 0 0 20px;
        box-sizing: border-box;
        img {
          height: 80px;
          margin: 5px;
          &:nth-child(2),
          &:nth-child(3) {
            height: 50px;
          }
        }
      }
    }
    .right {
      width: 35%;
      .tools {
        width: 100%;
        height: 260px;
        background-color: #fff4;
        padding: 20px 0 0 20px;
        box-sizing: border-box;
        img {
          height: 70px;
          margin: 10px;
        }
      }
    }
  }
  ${mq.maxWidth("xl")`
    height: 700px;
    .skills {
      .left {
        .front,.back {
          height: 220px;
        }
      }
      .right {
        .tools {
          height: 460px;
        }
      }
    }
  `}
  ${mq.maxWidth("lg")`
    .skills {
      .left {
        .front,.back {
          height: 210px;
        }
      }
      .right {
        .tools {
          height: 440px;
        }
      }
    }
  `}
  ${mq.maxWidth("md")`
    height: 900px;
    .skills {
      .left {
        width: 100%;
        margin: 0;
        .front,.back {
          height: 210px;
        }
      }
      .right {
        width: 100%;
        margin-top: 20px;
        .tools {
          height: 240px;
        }
      }
    }
  `}
  
  ${mq.maxWidth("sm")`
    .skills {
      width: 90%;
      margin: auto;
      .left {
        width: 100%;
        margin-right: 0;
        .front,.back {
          height: 200px;
        }
      }
      .right {
        width: 100%;
        margin-top: 20px;
        .tools {
          height: 240px;
        }
      }
    }
  `}
`;

const ProjectContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 510px;
  padding-top: 20px;
  .warning {
    display: none;
  }
  h1 {
    text-align: center;
    color: white;
  }
  .projectwrap {
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    .sev,
    .weather,
    .clone {
      width: 32%;
      height: 400px;
      background-color: #fff4;
      margin-right: 2%;
      padding-left: 2.5%;
      box-sizing: border-box;
      img {
        width: 90%;
        margin: 20px auto;
        box-shadow: 5px 5px 5px #0007;
      }
      a {
        color: white;
        font-weight: bold;
        display: block;
        padding-top: 10px;
      }
      ul {
        margin-top: 10px;
        li {
          color: white;
          list-style: circle;
        }
      }
    }
    .clone {
      margin: 0;
      padding-left: 0;
      padding-right: 36px;
      .collapse {
        width: 100%;
      }
      .collapsible-title {
        background-color: #0007;
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        font-weight: normal;
        margin: 0;
        text-align: left;
        outline: none;
        font-size: 15px;
      }
      .active,
      .collapsible-title:hover {
        background-color: #0009;
        color: white;
      }
      .content {
        width: 100%;
        padding: 0 18px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        background-color: #f1f1f109;
        ul {
          float: left;
          margin-right: 15px;
        }
        img {
          float: left;
          width: 50%;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
  ${mq.maxWidth("xl")`
    .content {
      img {
        display: none;
      }
    }
  `}
  ${mq.maxWidth("lg")`
    .content {
      img {
        display: none;
      }
    }
  `}
  ${mq.maxWidth("md")`
    .warning {
      display: block;
      color: white;
      font-weight: bold;
      text-align: center;
    }
    .projectwrap {
      display: none;
    }
  `}
  ${mq.maxWidth("sm")`
    ..warning {
      display: block;
      color: white;
      font-weight: bold;
      text-align: center;
    }
    .projectwrap {
      display: none;
    }
  `}
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #000;
  h1 {
    margin: 0;
    color: white;
    text-align: center;
    padding-top: 50px;
  }
`;


const App = memo(() => {
  const cloneClick = (e) => {
    const current = e.currentTarget;

    // 스스로에게 active클래스에 대한 적용여부 변경
    current.classList.toggle("active");

    const parent = current.closest(".collapse");

    const content = parent.querySelector(".content");

    // content에 maxHeight 속성이 있다면 (혹은 0이 아니라면)
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
  return (
    <div>
      <MiddleDiv>
        <HeaderContainer>
          <div className="wrap">
            <div className="links">
              <Link to="about" className="about" spy={true} smooth={true}>
                About Me
              </Link>
              <Link to="project" className="project" spy={true} smooth={true}>
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
          <div className="mainwrap">
            <div className="text">
              <h1>
                안녕하세요!
                <br />
                Front-end Developer를
                <br />
                꿈꾸는 <span>김다보미</span>입니다.
              </h1>
              <p>
                Dabomi Kim
                <br />
                Tel. 010-3341-0934
                <br />
                Email. cdabomi60@gmail.com
              </p>
            </div>
            <img src={me} alt="me" />
          </div>
        </MainContainer>
        <AboutContainer id="about">
          <div className="intro">
            <img src={emo} alt="emo" />
            <p>
              사용자의 편의와 서비스의 편리성을 모두 고려할 수 있는
              <br />
              프론트엔드 개발자가 되고 싶습니다.
              <br />
              유행에 민감한 프론트엔드 개발 영역에서,
              <br />
              서비스의 품질을 향상시키기 위해
              <br />
              항상 새로움을 받아들일 준비가 되어있습니다.
            </p>
          </div>
          <div className="skills">
            <div className="left">
              <div className="front">
                <img src={htmlcss} alt="htmlcss" />
                <img src={js} alt="js" />
                <img src={react} alt="react" />
                <img src={redux} alt="redux" />
                <img src={sass} alt="sass" />
              </div>
              <div className="back">
                <img src={node} alt="node" />
                <img src={express} alt="express" />
                <img src={mysql} alt="mysql" />
                <img src={mybatis} alt="mybatis" />
                <img src={ubuntu} alt="ubuntu" />
              </div>
            </div>
            <div className="right">
              <div className="tools">
                <img src={vscode} alt="vscode" />
                <img src={miro} alt="miro" />
                <img src={figma} alt="figma" />
                <img src={git} alt="git" />
                <img src={vmware} alt="vmware" />
                <img src={workbench} alt="workbench" />
              </div>
            </div>
          </div>
        </AboutContainer>
        <ProjectContainer id="project">
          <h1>My Projects</h1>
          <p className="warning">
            앗! 프로젝트를 보기에는 화면이 너무 작습니다!
            <br />
            화면 크기를 키워주세요 :D
          </p>
          <div className="projectwrap">
            <div className="sev">
              <img src={sev} alt="sev" />
              <NavLink to="/build">Going to Project</NavLink>
            </div>
            <div className="weather">
              <img src={weather} alt="weather" />
              <NavLink to="/weather/index.html">Going to Project</NavLink>
            </div>
            <div className="clone">
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  W3CSS Clone Coding 01
                </h1>
                <div className="content">
                  <NavLink to="/clone/01/clone01.html">Going to Project</NavLink>
                  <ul>
                    <li>html5/css3</li>
                    <li>반응형 구현</li>
                    <li>Sass</li>
                    <li>React로 재구현</li>
                  </ul>
                  <img src={clone01} alt="clone01" />
                </div>
              </div>
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  W3CSS Clone Coding 02
                </h1>
                <div className="content">
                  <NavLink to="/clone/02/clone2.html">Going to Project</NavLink>
                  <ul>
                    <li>html5/css3</li>
                    <li>반응형 구현</li>
                    <li>React로 재구현</li>
                  </ul>
                  <img src={clone02} alt="clone02" />
                </div>
              </div>
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  W3CSS Clone Coding 03
                </h1>
                <div className="content">
                  <NavLink to="/clone/03/clone03.html">Going to Project</NavLink>
                  <ul>
                    <li>html5/css3</li>
                    <li>반응형 구현</li>
                    <li>Sass</li>
                    <li>React로 재구현</li>
                  </ul>
                  <img src={clone03} alt="clone03" />
                </div>
              </div>
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  W3CSS Clone Coding 04
                </h1>
                <div className="content">
                  <NavLink to="/clone/04/clone04.html">Going to Project</NavLink>
                  <ul>
                    <li>html5/css3</li>
                    <li>반응형 구현</li>
                    <li>Sass</li>
                  </ul>
                  <img src={clone04} alt="clone04" />
                </div>
              </div>
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  W3CSS Clone Coding 05
                </h1>
                <div className="content">
                  <NavLink to="/clone/05/clone05.html">Going to Project</NavLink>
                  <ul>
                    <li>html5/css3</li>
                    <li>반응형 구현</li>
                    <li>Sass</li>
                  </ul>
                  <img src={clone05} alt="clone05" />
                </div>
              </div>
            </div>
          </div>
        </ProjectContainer>
        <FooterContainer>
          <h1>Thank You for Watching!</h1>
        </FooterContainer>
        <TopButton />
      </MiddleDiv>
    </div>
  );
});

export default App;
