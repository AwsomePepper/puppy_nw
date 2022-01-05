import { Component, useEffect, useRef } from "react";
import React from "react";

const { kakao, cloud } = window;
let mapRef = null;

function Content() {

    mapRef = useRef();
    navigator.geolocation.watchPosition((position) => {

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);
        mapRef.current = map;

        // 마커를 생성합니다
        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
            imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
            imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니

        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

        var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정 
        });

        marker.setMap(map);
        // marker.setMap(map);

        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        var content = '<div class="customoverlay">' +
            '  <a href="https://naver.com" target="_blank">' +
            '    <span class="title">"회원정보"</span>' +
            '  </a>' +
            '</div>';

        // 지도 중심좌표를 접속위치로 변경합니다.
        var position = new kakao.maps.LatLng(lat, lng);

        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1
        })
    });

    return (
        <div className="container">
        <div id='map' style={
            { 'width': '100%', height: '800px' }} >
            <div></div>
        </div>
        </div>
    );
}

export { Content };
