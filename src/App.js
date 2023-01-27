import React, { memo } from "react";
import { Link } from "react-scroll";
import TopButton from "./components/TopButton";

// 반응형
import mq from "./MediaQuery";

// 이미지
import me from "./assets/img/velog.jpg";
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
          height: 80px;
          margin: 10px;
        }
      }
    }
  }
  ${mq.maxWidth('xl')`
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
  ${mq.maxWidth('lg')`
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
  ${mq.maxWidth('md')`
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
  height: 504px;
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
          <div className="projectwrap">
            <div className="sev"></div>
            <div className="weather"></div>
            <div className="clone"></div>
          </div>
        </ProjectContainer>
        <TopButton />
      </MiddleDiv>
    </div>
  );
});

export default App;
