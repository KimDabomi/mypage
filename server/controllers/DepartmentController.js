const express = require("express");
const logger = require("../helper/LogHelper");
const regexHelper = require('../helper/RegexHelper');
const departmentService = require("../services/DepartmentService");
const { pagenation } = require('../helper/UtilHelper');
const { ForbiddenException } = require("../helper/ExceptionHelper");

module.exports = (() => {
    const url = "/department";
    const router = express.Router();

    /** 전체 목록 조회 --> Read(SELECT) */
    router.get(url, async (req, res, next) => {
        // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
        const { query, page=1, rows=5 } = req.query;

        // 검색어를 MyBatis에 전달하기 위한 객체로 구성
        const params = {};
        if (query) {
            params.dname = query;
            params.loc = query;
        }

        // 데이터 조회
        let json = null;

        try {
            // 전체 데이터 수 얻기
            const totalCount = await departmentService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await departmentService.getList(params);
        } catch (err) {
            return next(err);
        }

        res.sendResult({ pagenation: pageInfo, data: json });
    });

    /** 단일행 조회 --> Read(SELECT) */
    router.get(`${url}/:deptno`, async (req, res, next) => {
        // 파라미터 받기
        const { deptno } = req.params;

        // 파라미터 유효성검사
        try {
            regexHelper.value(deptno, "학과번호가 없습니다.");
            regexHelper.num(deptno, "학과번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try {
            json = await departmentService.getItem({
                deptno: deptno,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 데이터 추가 --> Create(INSERT) */
    router.post(url, async (req, res, next) => {
        // 파라미터 받기
        const { dname, loc } = req.body;

        // 유효성 검사
        try {
            regexHelper.value(dname, "학과 이름이 없습니다.");
            regexHelper.maxLength(dname, 20, "학과 이름은 최대 20자까지 입력 가능합니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await departmentService.addItem({
                dname: dname,
                loc: loc,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 데이터 수정 --> Update(UPDATE) */
    router.put(`${url}/:deptno`, async (req, res, next) => {
        // 파라미터 받기
        const { deptno } = req.params;
        const { dname, loc } = req.body;

        // 유효성 검사
        try {
            regexHelper.value(deptno, "학과번호가 없습니다.");
            regexHelper.num(deptno, "학과번호가 잘못되었습니다.");
            regexHelper.value(dname, "학과 이름이 없습니다.");
            regexHelper.maxLength(dname, 20, "학과 이름은 최대 20자까지 입력 가능합니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await departmentService.editItem({
                deptno: deptno,
                dname: dname,
                loc: loc,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 데이터 삭제 --> Delete(DELETE) */
    router.delete(`${url}/:deptno`, async (req, res, next) => {
        // 파라미터 받기
        const { deptno } = req.params;

        // 유효성 검사
        try {
            regexHelper.value(deptno, "학과번호가 없습니다.");
            regexHelper.num(deptno, "학과번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        try {
            await departmentService.deleteItem({
                deptno: deptno,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult();
    });

    return router;
})();