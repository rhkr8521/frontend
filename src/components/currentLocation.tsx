import { Circle } from 'react-kakao-maps-sdk';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CurrentLocation(props: any) {
  console.log('현재위치', props.data);

  return (
    <div>
      <Circle
        center={props.data}
        radius={50}
        strokeWeight={3} // 선의 두께입니다
        strokeColor={'#75B8FA'} // 선의 색깔입니다
        strokeOpacity={0.9} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={'dash'} // 선의 스타일 입니다
        fillColor={'#CFE7FF'} // 채우기 색깔입니다
        fillOpacity={0.5} // 채우기 불투명도 입니다
      />
    </div>
  );
}

export default CurrentLocation;
{
  /* <MapMarker // 마커를 생성합니다
        position={{ lat: props.data.lat, lng: props.data.lng }}
        image={{
          src: 'https://i1.daumcdn.net/dmaps/apis/n_local_blit_04.png', // 마커이미지의 주소입니다
          size: {
            width: 31,
            height: 35,
          }, // 마커이미지의 크기입니다
        }}
      />  */
}
