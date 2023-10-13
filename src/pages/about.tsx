import { useEffect } from 'react';
import { Container, Wrapper } from '../styles/styles';

export default function About() {
  const CID = 'a52com5x1w'; // 네이버맵 API의 Client id
  useEffect(() => {
    // 페이지가 로드될 때 한 번만 실행될 코드
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CID}&submodules=geocoder`; // 여기에 자신의 네이버 지도 API 클라이언트 아이디를 넣어야 합니다.
    script.async = true;
    document.head.appendChild(script);

    // 네이버 지도 API 스크립트가 로드된 후 실행될 코드
    script.onload = () => {
      // map 정의 - 중심지와 확대 정도 조정
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(37.450795, 127.128816),
        zoom: 16,
      });

      // 지도 위 마킹 - api로 리스트 받아와서 각 위도 경도 할당해줘야
      const marker1 = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.450795, 127.128816),
        map: map,
      });
      const marker2 = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.448, 127.1278),
        map: map,
      });
      const marker3 = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.447, 127.1282),
        map: map,
      });
      const marker4 = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.4487, 127.128),
        map: map,
      });

      // 클릭한 좌표 정보를 alert로 표시
      window.naver.maps.Event.addListener(map, 'click', (e: any) => {
        alert(`Clicked at: ${e.coord}`);
      });
    };

    return () => {
      // 컴포넌트가 언마운트될 때 실행될 코드 (cleanup)
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Wrapper>this is About</Wrapper>
      <div id="map" style={{ width: '100%', height: '400px' }} />
    </Container>
  );
}
