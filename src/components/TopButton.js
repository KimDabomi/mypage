/**
 * @ File Name: TopButton.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-26 18:30
 * @ Description: 탑버튼
 */

import React, { memo, useCallback, useRef } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import buttonimg from '../assets/img/ico-chevron-up@2x.png';

const Div = styled.div`
  .topButton {
    box-sizing: border-box;
    position: fixed;
    bottom: 15px;
    right: 30px;
    margin-left: 0;
    position: fixed;
    z-index: 100;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    padding-top: 22px;
    font-size: 12px;
    border: 1px solid #d2d2d2;
    ${`background: #fff url(${buttonimg}) no-repeat center 11px;`}
    background-size: 15px auto;
    color: #333;
    transition: all 0.3s ease;
    cursor: pointer;
    opacity: 0;
  }
`;

const TopButton = memo(() => {
  // DOM선택을 위한 ref
  const topBtn = useRef();

  //스크롤 일정 내렸을 때 나타나기
  window.addEventListener('scroll', function () {
    if (topBtn.current) {
      if (this.scrollY > 250) {
        topBtn.current.style.opacity = '1';
      } else {
        topBtn.current.style.opacity = '0';
      }
    }
  });

  //클릭했을 때 실행되는 이벤트
  const clickEvent = useCallback((e) => {
    e.preventDefault();
    //부드럽게 올라가게
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <Div>
      <Link className="topButton" to="#/" onClick={clickEvent} ref={topBtn}>
        TOP
      </Link>
    </Div>
  );
});

export default TopButton;
