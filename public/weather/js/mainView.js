/** 메인페이지 지도 출력함수 mainView() */ 
function mainView(area, key, json) {    

    /** 현재 기온 넣기 */
    let area1 = document.querySelector(`.${area}`);

    // 기온
    let now = area1.querySelector('.now');
    now.innerHTML = (json.main.temp.toFixed(0)) + '℃';


    /** 현재 하늘상태 넣기 */
    // 날씨 아이콘 아이디
    let icon = json.weather[0].icon;

    // 날씨 아이콘 URL
    let iconUrl = ow_img_url + icon + '@2x.png';
    
    // 기상 조건
    let description = json.weather[0].description;

    // 하늘상태
    let sky = area1.querySelector('.sky');
    // 이미지 생성
    const img = document.createElement('img');
    img.setAttribute("src", iconUrl);
    img.setAttribute("alt", description);
    sky.appendChild(img);

    
    /** 지역명 만들기 */
    let p = document.createElement('p');
    p.innerHTML = key;
    area1.appendChild(p);
}