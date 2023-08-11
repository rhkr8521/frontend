import { useState } from 'react';
import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

function Markers() {
  const [isOpen, setIsOpen] = useState(false);

  const markerPosition = {
    lat: 36.6282457054,
    lng: 127.468385476,
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
                나우 휘트니스
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
                <div className="img" style={{ margin: '0.5em' }}>
                  <img
                    src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                    width="73"
                    height="70"
                    alt="카카오 스페이스닷원"
                  />
                </div>
                <div className="desc" style={{ margin: '0.5em' }}>
                  <div className="ellipsis">제가 다니는 헬스장 입니다</div>
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
export default Markers;
