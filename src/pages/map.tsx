import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from 'react-naver-maps';

function MyMap() {
  // instead of window.naver.maps
  const navermaps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(37.450795, 127.128816)}
      defaultZoom={16}
    >
      <Marker position={new navermaps.LatLng(37.3595704, 127.105399)} />
    </NaverMap>
  );
}

export default function map() {
  return (
    <MapDiv
      style={{
        width: '100%',
        height: '600px',
      }}
    >
      <MyMap />
    </MapDiv>
  );
}
