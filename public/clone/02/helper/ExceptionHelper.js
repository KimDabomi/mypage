class BadRequestException extends Error {
    // http 상태코드를 의미하는 멤버변수
    #statusCode;
    // 입력요소에 대한 selector (추가)
    #selector;

    // 입력요소를 두 번째 파라미터로 전달받는다. (수정)
    constructor(msg = '잘못된 요청입니다.', selector = null) {
        super(msg);
        super.name = 'BadRequestException';
        this.#statusCode = 400;
        // 멤버변수에 입력요소를 참조시킨다 (추가)
        this.#selector = selector;
    }
    get statusCode() {
        return this.#statusCode;
    }
    get selector() {
        return this.#selector;
    }
}
export {BadRequestException};