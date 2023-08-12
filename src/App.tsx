import './App.css';
import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import useGeoLocation from './hooks/useGeolocation';
import CurrentLocation from './components/currentLocation';
import Markers from './components/markers';

function App() {
  const location = useGeoLocation();
  let nowLocation = { lat: 0, lng: 0 };

  location.loaded; //위치데이터 가져오기

  if (location.coordinates) {
    nowLocation = {
      lat: location.coordinates.lat,
      lng: location.coordinates.lng,
    };
  }

  return (
    <>
      <Map
        center={nowLocation}
        style={{
          width: '500px',
          height: '600px',
          display: 'block',
          margin: '0 auto',
        }}
      >
        <CurrentLocation data={nowLocation} />
        <Markers />
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
    </>
  );
}

export default App;
