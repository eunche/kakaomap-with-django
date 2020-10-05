// 오버레이의 별을 클릭하면 데이터 변경이 적용되는 함수 정의
const clickStar = (event) => {
    const info = event.target.parentElement.parentElement.parentElement;
    const title = info.querySelector(".jsplaceName").innerText;
    const address = info.querySelector(".ellipsis").innerText;
    const jibun = info.querySelector(".jibun").innerText;
    const lat = info.querySelector("#jsLat").value;
    const lng = info.querySelector("#jsLng").value;
    const link = info.querySelector(".link").getAttribute('href')

    $.ajax({
        url: api_url,                                                                               // 클라이언트가 요청을 보낼 서버의 URL 주소
        data: { title, address, jibun, lat, lng, link, csrfmiddlewaretoken: csrf },                // HTTP 요청과 함께 서버로 보낼 데이터
        type: "POST",                                                                              // HTTP 요청 방식(GET, POST)
        dataType: "json"                                                                          // 서버에서 보내줄 데이터의 타입
    }).done(function (json) {

        info.querySelector(".jsStar").innerText = json.text
        info.querySelector(".jsStar").style.color = json.color
    })
}






// 마커가 생기면, DB에 의해 별 색을 업데이트하는 함수 정의
const isFavorites = (title) => {
    const star = document.querySelector('.jsStar')


    $.ajax({
        url: update_api_url,                                   // 클라이언트가 요청을 보낼 서버의 URL 주소
        data: { title, csrfmiddlewaretoken: csrf },            // HTTP 요청과 함께 서버로 보낼 데이터
        type: "POST",                                         // HTTP 요청 방식(GET, POST)
        dataType: "json"                                      // 서버에서 보내줄 데이터의 타입
    }).done(function (json) {
        star.innerText = json.text
        star.style.color = json.color
    })
}






// 떠있는 오버레이를 전부 지우는 함수 정의
const removeOverlayAll = () => {
    for (const overlay of overlays) {
        overlay.setMap(null)
    }
}