import './App.css';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import useGeoLocation from './hooks/useGeolocation';

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
    <Map
      center={{ lat: nowLocation.lat, lng: nowLocation.lng }}
      style={{ width: '500px', height: '600px', textAlign: 'center' }}
    >
      {/* 현위치 표시 */}
      <MapMarker
        position={{ lat: nowLocation.lat, lng: nowLocation.lng }}
      ></MapMarker>
      <MapMarker position={{ lat: 36.626704, lng: 127.456214 }}>
        <div style={{ color: '#000' }}>충북대 입니다!</div>
      </MapMarker>
      <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
    </Map>
  );
}

export default App;
