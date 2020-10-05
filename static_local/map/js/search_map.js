/*
함수 정의 모음
*/
const displayPlaces = (data) => {

}



// 검색이 완료되었을때 호출되는 함수 정의
const placesSearchCB = (data, status, _) => {

}



// 장소 keyword를 입력받아 검색하는 함수 정의
const searchPlaces = () => {

}














/*
초기화 할 변수들
*/

// 마커를 전부 담을 배열 초기화
let markers = [];

// 오버레이 전부 담을 배열 초기화
let overlays = [];

// 검색결과가 나왔을때, 지도의 확대범위를 정하는 bounds객체 생성
let bounds = new kakao.maps.LatLngBounds();

// 마커클러스터 초기화
let clusterer;














/*
가장 먼저 실행되는 부분으로, 웹 페이지에 지도를 띄우는 부분
*/

