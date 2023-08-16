import { useState } from 'react';
import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Marker(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const data = props.data;

  const markerPosition = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <>
      <MapMarker position={markerPosition} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <CustomOverlayMap position={markerPosition}>
          <div className="wrap">
            <div
              className="info"
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                border: '1px solid #ccc',
              }}
            >
              <div
                className="title"
                style={{
                  margin: '0.5em',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {data.tag || <div> </div>}
                <span>{data.writer}</span>
                <div onClick={() => setIsOpen(false)}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
                    width="18"
                    height="15"
                    alt="닫기"
                  />
                </div>
              </div>
              <hr></hr>
              <div className="body" style={{ display: 'flex' }}>
                {data.img && ( // 여기서 data.img 값이 null이 아닌 경우에만 아래 div를 출력
                  <div className="img" style={{ margin: '0.5em' }}>
                    <img
                      src={data.img}
                      width="100em"
                      height="100"
                      alt="이미지"
                    />
                  </div>
                )}
                <div className="desc" style={{ margin: '0.5em' }}>
                  <div className="ellipsis">{data.content}</div>
                </div>
                <span>{data.date}</span>
              </div>
            </div>
          </div>
          ;
        </CustomOverlayMap>
      )}
    </>
  );
}
export default Marker;
