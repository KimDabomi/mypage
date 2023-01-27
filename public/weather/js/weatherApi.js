class weatherApi {
    /** 실시간 날씨 api호출하는 함수 mainApi() */ 
    async currentWeatherApi(city) {
        // Current weather data url
        let current_url = ow_data_url + 'weather';
        
        // ajax 결과가 저장될 json
        let json = null;

        // ajax 요청
        try {
            const response = await axios.get(`${current_url}${ow_params}&q=${city}`);
            // console.log(response);
            json = response.data;
            return json;
        } catch (e) {
            console.error(e);
            alert('요청을 처리하는데 실패했습니다.');
            return;
        } finally {
            // 로딩바 닫기
            loading.classList.remove('active');
        }
    }
    
    /** 5일예보 3시간단위 api호출하는 함수 fiveDaysWeatherApi() */ 
    async fiveDaysWeatherApi(area) {
        // 5days weather data url
        let days_url = ow_data_url +'forecast'
        
        // ajax 결과가 저장될 json
        let json2 = null;

        // ajax 요청
        try {
            const response = await axios.get(`${days_url}${ow_params}&q=${area}`);
            json2 = response.data;
            return json2;
        } catch (e) {
            console.error(e);
            alert('요청을 처리하는데 실패했습니다.');
            return;
        } finally {
            // 로딩바 닫기
            loading.classList.remove('active');
        }
    }

    /** 기상청 단기예보 api호출하는 함수 forecastApi() */ 
    async forecastApi(city2) {
        // 오늘 날짜를 얻기위한 Date객체
        let date2 = new Date();

        const yy2 = date2.getFullYear();
        const mm2 = date2.getMonth() + 1;
        const dd2 = date2.getDate();

        // 오늘 날짜 today  
        let today = yy2.toString() + mm2.toString() + dd2.toString(); // 얻어온 값은 숫자이기 때문에 문자로 변환해서 합침
        // console.log(today);

        let url = go_url;
        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + go_key;
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); 
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('260'); 
        queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); 
        queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(today); 
        queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0200'); 
        queryParams += '&' /* encodeURIComponent('nx') + '=' + encodeURIComponent('55') */; 
        // queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); 
        // console.log(queryParams);

        // ajax 결과가 저장될 json
        let json3 = null;

        // ajax 요청
        try {
            const response = await axios.get(`${url}${queryParams}${city2}`);
            // console.log(response);
            json3 = response;
            console.log(json3);
            return json3;
        } catch (e) {
            console.error(e);
            alert('요청을 처리하는데 실패했습니다.');
            return;
        } finally {
            // 로딩바 닫기
            loading.classList.remove('active');
        }
    }
}