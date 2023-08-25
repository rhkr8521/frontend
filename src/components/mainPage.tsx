/* eslint-disable @typescript-eslint/no-explicit-any */
import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import CurrentLocation from '../components/currentLocation';
import Buttons from '../components/buttons';
import { useState } from 'react';
import Mypage from './user/Mypage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MainPage(props: any) {
  const [position, setPosition] = useState(props.data);
  const [mypageisOpen, setMypageIsOpen] = useState(false);
  const clickedMypage = () => {
    setMypageIsOpen((prev) => !prev);
  };

  const currentLocation = () => {
    setPosition(props.data);
  };

  return !mypageisOpen ? (
    <>
      <Map
        center={position}
        style={{
          height: '100vh',
        }}
        // onClick={(_t, mouseEvent) =>
        //   setPosition({
        //     lat: mouseEvent.latLng.getLat(),
        //     lng: mouseEvent.latLng.getLng(),
        //   })
        // }
        level={3}
        onIdle={(_t) =>
          setPosition({
            lat: _t.getCenter().getLat(),
            lng: _t.getCenter().getLng(),
          })
        }
        isPanto={true}
      >
        <CurrentLocation data={props.data} />
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <Buttons
          data={position}
          goBtn={currentLocation}
          mypage={clickedMypage}
        />
      </Map>
    </>
  ) : (
    <Mypage close={clickedMypage} />
  );
}

export default MainPage;
