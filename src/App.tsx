import './App.css';
import useGeoLocation from './hooks/useGeolocation';
import MainPage from './components/mainPage';
import Loading from './components/loading';

function App() {
  const location = useGeoLocation();
  let nowLocation = { lat: 0, lng: 0 };

  location.loaded; //위치데이터 가져오기

  if (location.coordinates?.lat) {
    nowLocation = {
      lat: location.coordinates.lat,
      lng: location.coordinates.lng,
    };

    return (
      <>
        <MainPage data={nowLocation} />
      </>
    );
  } else {
    return (
      <>
        <Loading />
      </>
    );
  }
}

export default App;
