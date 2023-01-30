/*
 * @ File name: LoginController.js
 * @ Author: 김다보미(cdabomi60@gmail.com)
 * @ Last Update: 2023-01-18 15:40
 * @ Description: 로그인 컨트롤러
 */

const express = require("express");
const logger = require("../helper/LogHelper");
const { join, resolve } = require("path");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise");
const { ForbiddenException } = require("../helper/ExceptionHelper");

module.exports = (() => {
  const router = express.Router();

  // 설정 파일 내용 가져오기
  dotenv.config({ path: join(resolve(), ".env.server.development") });

  // 접속 정보 설정
  const connectionInfo = {
    host: process.env.DATABASE_HOST, // MYSQL 서버주소(다른PC인 경우 IP주소)
    post: process.env.DATABASE_PORT, // MYSQL 포트번호
    user: process.env.DATABASE_USERNAME, // MYSQL의 로그인 할 수 있는 계정 이름
    password: process.env.DATABASE_PASSWORD, // 비밀번호
    database: process.env.DATABASE_SCHEMA, // 사용하고자 하는 데이터베이스 이름
  };

 

  router.post("/api/login", async(req, res, next) => {
    let dbcon = null;

    console.log(req.session.userInfo);

    if (req.session.userInfo) {
      console.log(req.session.userInfo);
      return next(new ForbiddenException('이미 로그인 중입니다.'));
    }

    const id = req.body.userid;
    const pw = req.body.userpw;

    logger.debug("id=" + id);
    logger.debug("pw=" + pw);

    try {
      // 2) mysql 접속 객체 생성
      dbcon = await mysql.createConnection(connectionInfo);
      await dbcon.connect();
    } catch (err) {
      console.error("[데이터베이스 접속 실패]");
      console.error(err);
      return;
    }

    let userInfo = null;
  
    try {
      // 3) SQL 실행하기
      const sql = "SELECT userId,userName,userSex,userTel,userPreTel,userEmail,prtctorName,prtctorSex,prtctorBirth,regDate,userCategory,withdrawalStatus,withdrawalDate,withdrawalReason,editDate,pwEditDate,authCode,termsAgree,privateAgree,marketingAgree FROM userInfo WHERE userId=? AND userPassword=?";
      const [result1] = await dbcon.query(sql, [id, pw]);
      userInfo = result1[0];
      if (result1.length < 1) {
        throw new ForbiddenException('아이디나 비밀번호를 확인하세요');
      }
    } catch (err) {
      console.error(err);
      return next(err);
    } finally {
      console.log("~~~~~~~~~~~~~ db 접속 해제 ~~~~~~~~~~~~~");
      if (dbcon) {
        dbcon.end();
      }
    }

    req.session.userInfo = userInfo;
    res.sendResult({userInfo: userInfo});
  });

  return router;
})();
