/** 최저, 최고 기온 함수 getMinMax() */
function getMinMax(temp, w_data, today) {
    let result = 0;
    w_data.forEach((v, i) => {
        if(v.category == temp &&  v.fcstDate == today){
            // console.log(v.fcstValue);
            result = v.fcstValue;
        }
    });
    return result;
}

/** 메인페이지 날씨상태, 현재기온, 지역명, 최저기온, 최고기온 강수확률 함수 mainClick() */ 
function mainClick(area, json, json2, json3) {
    // 지역 HTML 요소 선택
    let area1 = document.querySelector(`.${area}`);

    // 날씨 아이콘 아이디
    let icon = json.weather[0].icon;
    // 날씨 아이콘 URL
    let iconUrl = ow_img_url + icon +'@2x.png';
    // 기상 조건
    let description = json.weather[0].description;

    // 5일간 3시간 단위 날씨 데이터(강수확률에 쓰임)
    let list = json2.list;

    /** 오늘 날짜 리턴받기 */
    const date = new Date();
    const yy1 = date.getFullYear();
    const mm1 = date.getMonth() + 1;
    const dd1 = date.getDate();
    let today = yy1.toString() + mm1.toString() + dd1.toString(); // 오늘 날짜 today 얻어온 값은 숫자이기 때문에 문자로 변환해서 합침
    console.log(today);
    // 오늘하루의 기상청 단기예보 데이터 w_data(최저, 최고 기온에 쓰임)
    // let w_data = json3.response.body.items.item;
    // console.log(w_data);

    /** 클릭 이벤트: 상세정보 */
    area1.addEventListener('click', e=> {
        e.preventDefault();

        document.querySelector('#sky').innerHTML = `<img src="${iconUrl}" alt="${description}" style='height:70px' />`+ '</br>' + `${description}`;
        document.querySelector('#now').innerHTML = '<span class="material-symbols-outlined">thermostat</span>' + json.main.temp.toFixed(0) + '℃';
        // document.querySelector('#low').innerHTML = '최저기온' + '</br>' + getMinMax('TMN', w_data, today) + '℃';  // 최저기온 TMN
        // document.querySelector('#high').innerHTML = '최고기온' + '</br>' + getMinMax('TMX', w_data, today) + '℃'; // 최고기온 TMX
        document.querySelector('#rain_persent').innerHTML = '<span class="material-symbols-outlined">water_drop</span>' + '</br>' + '강수확률' + '</br>' + (list[0].pop)*100 + '%';
        document.querySelector('#hum').innerHTML = '<span class="material-symbols-outlined">waves</span>' + '</br>' + '습도' + '</br>' + json.main.humidity + '%';
        document.querySelector('#wind').innerHTML = '<span class="material-symbols-outlined">air</span>' + '</br>' + '풍속' + '</br>' + json.wind.speed + 'm/s';

        document.querySelector('.detail').style.display = 'block';
    });

    document.querySelector('#exit').addEventListener('click', e => {
        e.preventDefault();

        document.querySelector('.detail').style.display = 'none';
    });

}