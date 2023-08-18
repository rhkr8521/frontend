import './css/menu.css';
import { MapMarker } from 'react-kakao-maps-sdk';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Buttons(props: any) {
  const location = props.data;
  return (
    <div>
      <button
        className="customButton"
        style={{
          bottom: '8em',
          background:
            'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) no-repeat -194px -450px',
        }}
      ></button>
      <button
        className="customButton"
        style={{
          bottom: '5em',
          background:
            'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) no-repeat -105px -450px',
        }}
      ></button>
      <button
        className="customButton"
        style={{
          bottom: '2em',
          background:
            'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) no-repeat -153px -450px',
        }}
      ></button>
      {location && <MapMarker position={location} />}
    </div>
  );
}
export default Buttons;
