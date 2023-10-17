import {
  Container as MapDiv,
  NaverMap,
  // Marker,
  useNavermaps,
  Overlay,
  useMap,
} from 'react-naver-maps';

import { useState } from 'react';
import { makeMarkerClustering } from './marker-cluster';

function MarkerCluster() {
  // https://github.com/navermaps/marker-tools.js/blob/master/marker-clustering/src/MarkerClustering.js
  // 예제에서 제공된 코드를 그대로 사용하되 naver 객체를 주입 받도록 간단히 makeMarkerClustering로 Wrapping 합니다.

  const navermaps = useNavermaps();
  const map = useMap();

  // https://github.com/zeakd/react-naver-maps/blob/main/website/src/samples/marker-cluster.js
  const MarkerClustering = makeMarkerClustering(window.naver);

  const htmlMarker1 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png);background-size:contain;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  };
  const htmlMarker2 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-2.png);background-size:contain;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  };
  const htmlMarker3 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-3.png);background-size:contain;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  };
  const htmlMarker4 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-4.png);background-size:contain;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  };
  const htmlMarker5 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-5.png);background-size:contain;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  };

  // Customize Overlay 참고
  // https://zeakd.github.io/react-naver-maps/guides/customize-overlays/
  const [cluster] = useState(() => {
    const markers = [];

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

    markers.push(marker1, marker2, marker3, marker4);

    // eslint-disable-next-line no-shadow
    const cluster = new MarkerClustering({
      minClusterSize: 2,
      maxZoom: 17,
      map: map,
      markers: markers,
      disableClickZoom: false,
      gridSize: 120,
      icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
      indexGenerator: [10, 100, 200, 500, 1000],
      styling: function (clusterMarker: any, count: any) {
        clusterMarker.getElement().querySelector('div:first-child').innerText =
          count;
      },
    });

    return cluster;
  });

  return <Overlay element={cluster} />;
}

function MyMap() {
  // instead of window.naver.maps
  const navermaps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(37.450795, 127.128816)}
      defaultZoom={16}
      zoomControl={true}
      zoomControlOptions={{
        position: navermaps.Position.TOP_LEFT,
        style: navermaps.ZoomControlStyle.SMALL,
      }}
    >
      <MarkerCluster />
      {/* <Marker position={new navermaps.LatLng(37.3595704, 127.105399)} /> */}
    </NaverMap>
  );
}

export default function map1() {
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
