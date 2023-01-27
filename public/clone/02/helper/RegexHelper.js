import {BadRequestException} from './ExceptionHelper.js';

class RegexHelper {
    static #current = null;
    static getInstance() {
        if (RegexHelper.#current === null) {
            RegexHelper.#current = new RegexHelper();
        }
        return RegexHelper.#current;
    }

    /* 값의 존재 여부를 검사한다.
    @param {HTMLElement} field 검사할 대상에 대한 input 요소의 dom 객체
    @param {string} msg 값이 없을 경우 표시할 메세지 내용
    ex) regexHelper.value('#user_id','아이디를 입력하세요.); */
    value(field,msg) {
        const content = field.value;
        if (content === undefined || content === null || (typeof content === 'string' && content.trim().length === 0)) {
            throw new BadRequestException(msg,field);
        }
        return true;
    }

    /* 입력값이 지정된 글자 수를 초과했는지 검사한다.
    @param {HTMLElement} field 검사할 대상에 대한 input 요소의 dom 객체
    @param {int} len 최대 글자 수
    @param {string} msg 값이 없을 경우 표시할 메세지 내용 */
    maxLength(field,len,msg) {
        this.value(field,msg);
        const content = field.value;
        if (content.trim().length > len) {
            throw new BadRequestException(msg,field);
        }
        return true;
    }

    /* 입력값이 지정된 글자 수 미만인지 검사한다.
    @param {HTMLElement} field 검사할 대상에 대한 input 요소의 dom 객체
    @param {int} len 최소 글자 수
    @param {string} msg 값이 없을 경우 표시할 메세지 내용 */
    minLength(field,len,msg) {
        this.value(field,msg);
        const content = field.value;
        if (content.trim().length < len) {
            throw new BadRequestException(msg,field);
        }
        return true;
    }

    /* 두 값이 동일한지 검사한다.
    @param {string} origin 원본에 대한 input 요소의 dom 객체
    @param {string} compare 검사 대상에 대한 input 요소의 dom 객체
    @param {string} msg 검사에 실패할 경우 표시할 메세지 내용 */
    compareTo(origin,compare,msg) {
        this.value(origin,msg);
        this.value(compare,msg);
        var src = origin.value.trim();
        var dsc = compare.value.trim();
        if (src !== dsc) {
            throw new BadRequestException(msg,origin);
        }
        return true;
    }

    /* 라디오나 체크박스가 선택된 항목인지 확인한다.
    @param  {NodeList} field 검사할 CheckBox에 대한 컬랙션
    @param {string} msg 검사에 실패할 경우 표시할 메세지 내용 */
    check(field,msg) {
        const checkedItem = Array.from(field).filter((v,i) => v.checked);
        if (checkedItem.length === 0) {
            throw new BadRequestException(msg,field[0]);
        }
    }

    /* 라디오나 체크박스의 최소 선택 갯수를 제한한다.
    @param  {NodeList} field 검사할 CheckBox에 대한 컬랙션
    @param {int} len 최소 글자 수
    @param {string} msg 검사에 실패할 경우 표시할 메세지 내용 */
    checkMin(field,len,msg) {
        const checkedItem = Array.from(field).filter((v,i) => v.checked);
        if (checkedItem.length < len) {
            throw new BadRequestException(msg,field[0]);
        }
    }
s
    /* 라디오나 체크박스의 최대 선택 갯수를 제한한다.
    @param  {NodeList} field 검사할 CheckBox에 대한 컬랙션
    @param {int} len 최대 글자 수
    @param {string} msg 검사에 실패할 경우 표시할 메세지 내용 */
    checkMax(field,len,msg) {
        const checkedItem = Array.from(field).filter((v,i) => v.checked);
        if (checkedItem.length > len) {
            throw new BadRequestException(msg,field[0]);
        }
    }

    /* 입력값이 정규표현식을 충족하는지 검사한다.
    @param {HTMLElement} field 검사할 대상에 대한 input 요소의 dom 객체
    @param {string} msg 값이 없을 경우 표시할 메세지 내용
    @param {object} regexExpr 검사할 정규표현식 */
    field(field,msg,regexExpr) {
        this.value(field,msg);
        if (!regexExpr.test(field.value.trim())) {
            throw new BadRequestException(msg,field);
        }
        return true;
    }

    /* 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    @param {string} field 입력내용
    @param {string} msg 표시할 메시지 */
    num(field,msg) {
        return this.field(field,msg,/^[0-9]*$/);
    }

    /* 영문로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    @param {string} field 입력내용
    @param {string} msg 표시할 메시지 */
    eng(field,msg) {
        return this.field(field,msg,/^[a-zA-Z]*$/);
    }

    /* 한글로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    @param {string} field 입력내용
    @param {string} msg 표시할 메시지 */
    kor(field,msg) {
        return this.field(field,msg,/^[ㄱ-ㅎ가-힣]*$/);
    }

    /* 영문과 숫자로 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    @param {string} field 입력내용
    @param {string} msg 표시할 메시지 */
    engNum(field,msg) {
        return this.field(field,msg,/^[a-zA-Z0-9]*$/);
    }

    /* 한글과 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    @param {string} field 입력내용
    @param {string} msg 표시할 메시지 */
    korNum(field,msg) {
        return this.field(field,msg,/^[ㄱ-ㅎ가-힣0-9]*$/);
    }

    /* 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
    @param {string} field 입력내용
    @param {string} msg 표시할 메시지 */
    email(field,msg) {
        return this.field(field,msg,/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
    }

    /* 핸드폰번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다. 
    @param {string} field 입력내용
    @param {string} msg 표시할 메시지 */
    cellphone(field,msg) {
        return this.field(field,msg,/^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }

    /* 집전화 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
    @param {string} field 입력내용
    @param {string} msg 표시할 메시지 */
    telphone(field,msg) {
        return this.field(field,msg,/^\d{2,3}\d{3,4}\d{4}$/);
    }

    /* 핸드폰번호 형식과 집전화번호 형식 둘 중 하나를 충족하는지 검사한다.
    @param {string} field 입력내용
    @param {string} msg 표시할 메시지 */
    phone(field,msg) {
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/;
        var src = field.trim();
        // 입력값이 없거나, 핸드폰형식도 아니고 집전화형식도 아니라면?
        if (!src || (!check1.test(src) && !check2.test(src))) {
            throw new BadRequestException(msg);
        }
        return true;
    }
}

export default RegexHelper;