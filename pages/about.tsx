import { useEffect } from "react";
import Seo from "../components/Seo";

export default function About() {
  const CID = "a52com5x1w"
  useEffect(() => {
    // 페이지가 로드될 때 한 번만 실행될 코드
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CID}`; // 여기에 자신의 네이버 지도 API 클라이언트 아이디를 넣어야 합니다.
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => {
      // 네이버 지도 API 스크립트가 로드된 후 실행될 코드
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(37.450795, 127.128816),
        zoom: 16,
      });

      const marker1 = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.450795, 127.128816),
        map: map,
      });

      const marker2 = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.448, 127.128),
        map: map,
      });

      window.naver.maps.Event.addListener(map, 'click', (e: any) => {
        // 클릭한 좌표 정보를 alert로 표시
        alert(`Clicked at: ${e.coord}`);
      });
    };

    return () => {
      // 컴포넌트가 언마운트될 때 실행될 코드 (cleanup)
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>About</h1>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}