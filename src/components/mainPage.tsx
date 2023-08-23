/* eslint-disable @typescript-eslint/no-explicit-any */
import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import CurrentLocation from '../components/currentLocation';
import Buttons from '../components/buttons';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MainPage(props: any) {
  const [position, setPosition] = useState({ lat: 36, lng: 237 });

  return (
    <>
      <Map
        center={props.data}
        style={{
          height: '100vh',
        }}
        onClick={(_t, mouseEvent) =>
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }
      >
        <CurrentLocation data={props.data} />
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <Buttons data={position} />
      </Map>
    </>
  );
}

export default MainPage;
