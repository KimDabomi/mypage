/** 메인페이지 시작 함수 start() */
function start() {
    let apiInstance = new weatherApi();

    // 로딩바 객체
    const loading = document.querySelector('#loading');

    // 로딩바 화면에 표시하기
    loading.classList.add('active');

    // 도시(지역) 모음 areaList 만큼 반복
    for(let key in areaList) {
        /** 메인페이지 즉시실행 함수 */
        // 페이지가 실행되면서 자동으로 동작해야 하므로 즉시실행함수형태로 구현.    
        (async () => {
            const weather = await apiInstance.currentWeatherApi(areaList[key][0]);
            mainView(areaList[key][0], key, weather);
            const weather2 = await apiInstance.fiveDaysWeatherApi(areaList[key][0]);
            const weather3 = await apiInstance.forecastApi(areaList[key][1]);
            mainClick(areaList[key][0], weather, weather2, weather3);
        })();
    }
}