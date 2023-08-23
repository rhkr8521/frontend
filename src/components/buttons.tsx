import './css/menu.css';
import AddModal from './addModal';
import { MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import Tags from './tags';
import SearchModal from './searchModal';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Buttons(props: any) {
  const location = props.data;
  const [toggle, setToggle] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  const modalClose = () => {
    setAddModal(false);
  };
  const clickSearchBtn = () => {
    setSearchBtn((prev) => !prev);
  };

  return (
    <div>
      {toggle ? (
        // 추가 버튼 활성화
        <button
          className="customButton"
          style={{
            bottom: '11em',
            background:
              'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) no-repeat -194px -350px',
          }}
          onClick={clickedToggle}
        ></button>
      ) : (
        // 추가 버튼 비활성화
        <button
          className="customButton"
          style={{
            bottom: '11em',
            background:
              'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) no-repeat -194px -450px',
          }}
          onClick={clickedToggle}
        ></button>
      )}

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

      {searchBtn ? (
        <button
          className="customButton"
          style={{
            bottom: '8em',
            background:
              'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/ico_search.png) no-repeat -40px -122px',
            backgroundColor: '#258fff',
          }}
          onClick={clickSearchBtn}
        ></button>
      ) : (
        <button
          className="customButton"
          style={{
            bottom: '8em',
            background:
              'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/ico_search.png) no-repeat -40px -122px',
            backgroundColor: 'white',
          }}
          onClick={clickSearchBtn}
        ></button>
      )}
      {toggle && (
        <>
          <MapMarker
            position={location}
            image={{
              src: './public_assets/addMarker.png',
              size: { width: 200, height: 60 },
              options: {
                offset: {
                  x: 16,
                  y: 52,
                },
              },
            }}
            onClick={() => {
              setAddModal(true);
            }}
          />
        </>
      )}
      {addModal && (
        <AddModal
          data={location}
          close={modalClose}
          modalState={addModal}
          markerSign={clickedToggle}
        />
      )}
      {/* 검색 버튼 활성화에 따라 tag와 검색 컴포넌트 구분 */}
      {searchBtn ? <SearchModal endBtn={clickSearchBtn} /> : <Tags />}
    </div>
  );
}
export default Buttons;
