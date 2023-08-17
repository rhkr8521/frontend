import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import CurrentLocation from '../components/currentLocation';
import Markers from '../components/markers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MainPage(props: any) {
  return (
    <>
      <Map
        center={props.data}
        style={{
          height: '95vh',
          display: 'block',
        }}
      >
        <CurrentLocation data={props.data} />
        <Markers />
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
    </>
  );
}

export default MainPage;
