import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import CurrentLocation from '../components/currentLocation';
import Markers from '../components/markers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MainPage(props: any) {
  console.log('main component', props.data);
  return (
    <>
      <Map
        center={props.data}
        style={{
          width: '500px',
          height: '600px',
          display: 'block',
          margin: '0 auto',
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
