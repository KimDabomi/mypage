import React, { memo, useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TopButton from "./components/TopButton";

// 반응형
import mq from "./MediaQuery";

// 이미지
import me from "./assets/img/me.jpg";
import emo from "./assets/img/emo.png";
import htmlcss from "./assets/img/htmlcss.png";
import js from "./assets/img/js.png";
import express from "./assets/img/express-logo.png";
import figma from "./assets/img/figma.png";
import git from "./assets/img/git.png";
import miro from "./assets/img/miro.png";
import notion from "./assets/img/Notion-logo.png";
import mongodb from "./assets/img/MongoDB_Logo.png";
import mysql from "./assets/img/mysql.png";
import workbench from "./assets/img/MySQLWorkbench.png";
import wordpress from "./assets/img/wp-logo.png";
import gnuboard from "./assets/img/gnuboard-logo.png";
import react from "./assets/img/react.png";
import redux from "./assets/img/redux.png";
import sass from "./assets/img/sass.png";
import vscode from "./assets/img/vscode.png";
import node from "./assets/img/노드.png";
import sev from "./assets/img/sev.gif";
import weather from "./assets/img/weather.gif";
import clone01 from "./assets/img/clone01.jpg";
import clone02 from "./assets/img/clone02.jpg";
import clone03 from "./assets/img/clone03.jpg";
import clone04 from "./assets/img/clone04.jpg";
import clone05 from "./assets/img/clone05.jpg";
import mealfarm from "./assets/img/mealfarm-logo.png";
import hotpay from "./assets/img/hotpay-logo.png";
import robotxt from "./assets/img/robotxt-logo.png";
import tyb from "./assets/img/tyb-logo.png";
import lolpang from "./assets/img/lolpang-logo.png";
import lol from "./assets/img/lol.png";
import shop from "./assets/img/shop.png";
import makesite from "./assets/img/makesite.png";
import makesiteRending from "./assets/img/makesite-rending.png";
import googleads from "./assets/img/googleads.png";

const MiddleDiv = styled.div``;
const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  margin: 0;
  padding: 20px 0;
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
  }

  .about,
  .project,
  .git,
  .velog {
    color: white;
    margin-right: 30px;
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
      margin: 60px 40px 40px 0;
      span {
        font-weight: 900;
        color: #fff;
      }
    }
    img {
      width: 300px;
      height: 400px;
      box-shadow: 5px 5px 5px #0007;
    }
    p {
      color: #ddd;
    }
  }
  ${mq.maxWidth("md")`
    width: 100%;
    height: 550px;
    img {
      display: none;
    }
    .mainwrap {
      width: 68%;
    }
  `}
  ${mq.maxWidth("xs")`
    width: 100%;
    .mainwrap {
      width: 90%;
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
        padding-left: 20px;
        box-sizing: border-box;
        img {
          margin-right: 10px;
          &:first-child {
            height: 80px;
            margin-bottom: 20px;
          }
          &:nth-child(2) {
            height: 100px;
            margin-top: 10px;
          }
          &:nth-child(3),
          &:nth-child(4) {
            height: 50px;
            margin-bottom: 35px;
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
          &:last-child {
            width: 35%;
            height: 45px;
            margin-bottom: 20px;
          }
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
    .intro {
      width: 100%;
    }
    .skills {
      .left {
        .front,.back {
          height: 210px;
        }
      }
      .right {
        .tools {
          height: 440px;
          img {
            width: 35%;
          }
        }
      }
    }
  `}
  ${mq.maxWidth("md")`
    .intro {
      width: 100%;
    }
    margin: 0;
    height: 1000px;
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
          img {
            width: 25%;
            %:last-child {
              width: 40%;
            }
          }
        }
      }
    }
  `}
  ${mq.maxWidth("sm")`
    margin: 0;
    height: 1260px;
    .skills {
      .left {
        width: 100%;
        margin: 0;
        .front,.back {
          height: 240px;
          img {
            width: 30%;
          }
        }
      }
      .right {
        width: 100%;
        margin-top: 20px;
        .tools {
          height: 365px;
          img {
            width: 25%;
            %:last-child {
              width: 40%;
            }
          }
        }
      }
    }
    .intro {
      width: 100%;
      img {
        margin: 40px 20px 40px 0;
      }
    }
  `}
  ${mq.maxWidth("xs")`
    margin: 0;
    height: 1350px;
    .skills {
      .left {
        width: 100%;
        margin: 0;
        .front,.back {
          height: 240px;
          img {
            width: 30%;
          }
        }
      }
      .right {
        width: 100%;
        margin-top: 20px;
        .tools {
          height: 390px;
          img {
            width: 25%;
            %:last-child {
              width: 40%;
            }
          }
        }
      }
    }
    .intro {
      width: 100%;
      img {
        margin: 40px 20px 40px 0;
      }
    }
    
  `}
`;
const ProjectContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 20px 0;
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
    flex-wrap: wrap;
    .sev,
    .weather,
    .clone,
    .wordpress,
    .publishing {
      width: 31.5%;
      height: 400px;
      background-color: #fff4;
      margin-right: 2%;
      padding: 0 2.5%;
      box-sizing: border-box;
      img {
        width: 100%;
        margin: 20px auto;
        box-shadow: 5px 5px 5px #0007;
      }
      a,
      p {
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
          font-size: 14px;
        }
      }
    }
    .clone,
    .publishing {
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
      .collapsible-title.active,
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
          margin: 0 0 10px 0;
          padding: 0;
        }
        a {
          margin-bottom: 5px;
        }
      }
    }
    .wordpress,
    .publishing {
      margin-top: 20px;
      .wp-icons {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        a {
          width: 36%;
          margin-right: 10px;
          &:nth-child(2) {
            margin-top: 20px;
            margin-right: 20px;
          }
          &:nth-child(3) {
            width: 18%;
          }
          img {
            width: 100%;
            margin: 20px auto;
            box-shadow: none;
          }
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
    .projectwrap {
      .wordpress {
        .wp-icons {
          a {
            width: 30%;
          }
        }
      }
    }
  `}
  ${mq.maxWidth("md")`
    height: 200px;
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

    current.classList.toggle("active");

    const parent = current.closest(".collapse");
    const content = parent.querySelector(".content");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const newHeight =
      scrollTop + clientHeight >= scrollHeight ? scrollHeight : clientHeight;
    setScrollHeight(newHeight);
  };

  return (
    <div onScroll={handleScroll}>
      <MiddleDiv style={{ height: `${scrollHeight}px` }}>
        <HeaderContainer>
          <div className="wrap">
            <div className="links">
              <Link to="about" className="about" spy={true} smooth={true}>
                About Me
              </Link>
              <Link to="project" className="project" spy={true} smooth={true}>
                Project
              </Link>
              <NavLink
                to="//github.com/KimDabomi"
                target="_blank"
                className="git"
              >
                Github
              </NavLink>
              <NavLink
                to="//velog.io/@cdabomi60"
                target="_blank"
                className="velog"
              >
                Velog
              </NavLink>
            </div>
            <div className="blanks"></div>
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
              사용자의 편의와 서비스의 편리성을 모두 고려할 수 있는 프론트엔드 개발자가 되고 싶습니다.
              <br />
              유행에 민감한 프론트엔드 개발 영역에서, 서비스의 품질을 향상시키기 위해 항상 새로움을 받아들일 준비가 되어있습니다.
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
                <img src={mongodb} alt="mongodb" />
              </div>
            </div>
            <div className="right">
              <div className="tools">
                <img src={vscode} alt="vscode" />
                <img src={miro} alt="miro" />
                <img src={figma} alt="figma" />
                <img src={git} alt="git" />
                <img src={workbench} alt="workbench" />
                <img src={wordpress} alt="wordpress" />
                <img src={notion} alt="notion" />
                <img src={gnuboard} alt="gnuboard" />
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
              <NavLink to="/build" target="_blank">
                Going to Project
              </NavLink>
              <ul>
                <li>react-hook-form 유효성검사</li>
                <li>전체동의, 필수 항목 미체크 시 팝업표시</li>
                <li>비급여진료비조회 공공데이터포털 오픈API</li>
                <li>회원가입, 로그인 기능 구현</li>
                <li>MySQL, Node.js + Express를 통해 DB와 서버 구현</li>
              </ul>
            </div>
            <div className="weather">
              <img src={weather} alt="weather" />
              <NavLink to="/weather/index.html" target="_blank">
                Going to Project
              </NavLink>
              <ul>
                <li>공공데이터포털 기상청 오픈API</li>
                <li>Open Weather 오픈API</li>
                <li>전체 CSS 구현</li>
                <li>axios로 상세정보 가져와 팝업 띄우기</li>
              </ul>
            </div>
            <div className="clone">
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  W3CSS Clone Coding 01
                </h1>
                <div className="content">
                  <NavLink to="/clone/01/clone01.html" target="_blank">
                    Going to Project
                  </NavLink>
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
                  <NavLink to="/clone/02/clone2.html" target="_blank">
                    Going to Project
                  </NavLink>
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
                  <NavLink to="/clone/03/clone03.html" target="_blank">
                    Going to Project
                  </NavLink>
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
                  <NavLink to="/clone/04/clone04.html" target="_blank">
                    Going to Project
                  </NavLink>
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
                  <NavLink to="/clone/05/clone05.html" target="_blank">
                    Going to Project
                  </NavLink>
                  <ul>
                    <li>html5/css3</li>
                    <li>반응형 구현</li>
                    <li>Sass</li>
                  </ul>
                  <img src={clone05} alt="clone05" />
                </div>
              </div>
            </div>
            <div className="wordpress">
              <p>Wordpress Pages - Click Icon !</p>
              <div className="wp-icons">
                <NavLink to="//robotxt.io" target="_blank">
                  <img src={robotxt} alt="robotxt" />
                </NavLink>
                <NavLink to="//hotpays.co.kr" target="_blank">
                  <img src={hotpay} alt="hotpay" />
                </NavLink>
                <NavLink to="//xn--bp2b020c.com" target="_blank">
                  <img src={lolpang} alt="lolpang" />
                </NavLink>
                <NavLink to="//blog.mealfarm.co.kr" target="_blank">
                  <img src={mealfarm} alt="mealfarm" />
                </NavLink>
                <NavLink to="//blog.touchyourbody.com" target="_blank">
                  <img src={tyb} alt="tyb" />
                </NavLink>
              </div>
              <ul>
                <li>Generatepress</li>
                <li>Woocermerce</li>
                <li>Rank Math</li>
                <li>Html / Css</li>
              </ul>
            </div>
            <div className="publishing">
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  Publishing Page 01
                </h1>
                <div className="content">
                  <NavLink
                    to="//calllink.io/bbs/write.php?bo_table=consult"
                    target="_blank"
                  >
                    콜링크 사이트제작문의 &#60;&#60; Click
                  </NavLink>
                  <img src={makesite} alt="makesite" />
                </div>
              </div>
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  Publishing Page 02
                </h1>
                <div className="content">
                  <NavLink
                    to="//calllink.io/shop/item.php?it_id=1687918990"
                    target="_blank"
                  >
                    콜링크 사이트제작문의 상세 &#60;&#60; Click
                  </NavLink>
                  <img src={makesiteRending} alt="makesiteRending" />
                </div>
              </div>
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  Publishing Page 03
                </h1>
                <div className="content">
                  <NavLink to="//calllink.io/product.php" target="_blank">
                    콜링크 백링크SHOP &#60;&#60; Click
                  </NavLink>
                  <img src={shop} alt="shop" />
                </div>
              </div>
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  Publishing Page 04
                </h1>
                <div className="content">
                  <NavLink
                    to="//calllink.io/shop/item.php?it_id=1681091479"
                    target="_blank"
                  >
                    콜링크 구글애즈 상세 &#60;&#60; Click
                  </NavLink>
                  <img src={googleads} alt="googleads" />
                </div>
              </div>
              <div className="collapse">
                <h1 className="collapsible-title" onClick={cloneClick}>
                  Publishing Page 05
                </h1>
                <div className="content">
                  <NavLink
                    to="//xn--bp2b020c.com"
                    target="_blank"
                  >
                    롤팡 전체 &#60;&#60; Click
                  </NavLink>
                  <img src={lol} alt="lol" />
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
