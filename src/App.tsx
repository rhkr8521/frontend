import './App.css';
import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import useGeoLocation from './hooks/useGeolocation';
import CurrentLocation from './components/currentLocation';
import Markers from './components/markers';

function App() {
  const location = useGeoLocation();
  let nowLocation = { lat: 36.626704, lng: 127.456214 };

  if (location.loaded) {
    nowLocation = {
      lat: location.coordinates?.lat || 36.626704,
      lng: location.coordinates?.lng || 127.456214,
    };
  }

  return (
    <>
      <Map
        center={{ lat: nowLocation.lat, lng: nowLocation.lng }}
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
