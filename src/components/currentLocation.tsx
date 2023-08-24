import { MapMarker } from 'react-kakao-maps-sdk';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CurrentLocation(props: any) {
  //console.log('현재위치', props.data);

  return (
    <div>
      <MapMarker // 마커를 생성합니다
        position={{ lat: props.data.lat, lng: props.data.lng }}
        image={{
          src: 'https://t1.daumcdn.net/localimg/localimages/07/2018/mw/m640/ico_marker.png',
          size: {
            width: 30,
            height: 30,
          },
        }}
      />
    </div>
  );
}

export default CurrentLocation;
{
  /* <Circle
        center={props.data}
        radius={50}
        strokeWeight={1} // 선의 두께입니다
        strokeColor={'#75B8FA'} // 선의 색깔입니다
        strokeOpacity={0.9} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={'dash'} // 선의 스타일 입니다
        fillColor={'#CFE7FF'} // 채우기 색깔입니다
        fillOpacity={0.5} // 채우기 불투명도 입니다
      />  */
}
