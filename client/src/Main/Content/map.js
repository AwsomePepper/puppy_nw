import { Component, useEffect, useRef, useState } from "react";
import React from "react";
import { Socket } from "socket.io-client";

const { kakao, cloud } = window;
let mapRef = null;
var map = null;

// //지도 생성 

export default function Map({ chat }) {

    useEffect(() => {
        mapscript({ chat });
    }, []);

    useEffect(() => {
        markAdd(chat.name, chat.message, chat.message2);
    }, [chat]);

    //내 위치 중심 지도시작(처음)
    const mapscript = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

                var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
                var options = { //지도를 생성할 때 필요한 기본 옵션
                    center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude), //지도의 중심좌표.
                    level: 3 //지도의 레벨(확대, 축소 정도)
                };
                map = new kakao.maps.Map(container, options);
                markAdd(position.coords.latitude, position.coords.longitude);
            })
        }
    }

    //마커찍기 + 인포윈도우 
    const markAdd = (upInfo, lat, lng) => {

        console.log(upInfo);

        // console.log(upInfo[0]);
        // var str = ["이름", "반려견 이름", "반려견 나이","반려견 성별","견종","사회성"];
        // var htmlIn = null;
        // for(var i=0; i<upInfo.length; i++){
        //     htmlIn += upInfo[i]+": "+str[i] + '</br>'
        // }
        // 마커를 생성합니다

        var imageSrc = './images/marker.png', // 마커이미지의 주소입니다    
            imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
            imageOption = { offset: new kakao.maps.Point(0, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니

        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

        var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정         
        })

        marker.setMap(map);

            //마커에 인포 윈도우 클릭 이벤트 등록! 
            console.log(upInfo);

            // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
            var iwContent = ' <div style="padding:15px;">'
                + '이름 :' + upInfo[0] + '<br>'
                + '강아지 이름 :' + upInfo[1] + '<br>'
                + '강아지 나이 :' + upInfo[2] + '<br>'
                + '강아지 성별 :' + upInfo[3] + '<br>'
                + '강아지 종 :' + upInfo[4] + '<br>'
                + '강아지 상태 :' + upInfo[5] + '<br>'

                + '</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: iwContent
            });

            // 마커에 마우스오버 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseover', function () {
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindow.open(map, marker);
            });

            // 마커에 마우스아웃 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseout', function () {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindow.close();
            });
        }

        return (
            <div style={{ padding: '20px' }}>
                <div id='map' style={
                    { width: '100%', height: '800px' }}>
                    <div></div>
                </div>
            </div>
        );
    }

    export { Map };