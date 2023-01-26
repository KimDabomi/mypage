/**
 * @ File Name: Header.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-26 18:30
 * @ Description: 헤더 컴포넌트
 */

import React, { memo } from "react";
import { Link } from "react-scroll";
import { Routes,Route } from "react-router-dom";
import styled from "styled-components";
import About from '../pages/About';
import Project from '../pages/Project';
import git from "../assets/img/git.png";
import velog from "../assets/img/velog.jpg";


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

const Header = memo(() => {
  return (
    <HeaderContainer>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
      </Routes>
      <div className="wrap">
        <div className="links">
          <Link to="/about" className="about">
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
  );
});

export default Header;
