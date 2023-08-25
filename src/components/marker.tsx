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
                border: '2px solid #ccc',
              }}
            >
              <div
                className="title"
                style={{
                  padding: '0.5em',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderRadius: '10px 10px 0 0',
                  backgroundColor: '#e9e9e9',
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
              <div className="body" style={{ display: 'flex' }}>
                {data.img !== 'null' && ( // 여기서 data.img 값이 null이 아닌 경우에만 아래 div를 출력
                  <div className="img" style={{ margin: '0.5em' }}>
                    <img
                      src={data.img}
                      width="100em"
                      height="100"
                      alt="이미지"
                    />
                  </div>
                )}
                <div
                  className="desc"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    margin: '0.5em',
                    maxHeight: '6.3em',
                    width: '12em',
                  }}
                >
                  <div
                    className="ellipsis"
                    style={{ overflow: 'auto', whiteSpace: 'normal' }}
                  >
                    {data.content}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <small>{data.date}</small>
                  </div>
                </div>
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
