/* eslint-disable @typescript-eslint/no-explicit-any */
import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import CurrentLocation from '../components/currentLocation';
import Buttons from '../components/buttons';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import Mypage from './user/Mypage';
import Signin from './user/Signin';
import Signup from './user/Signup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MainPage(props: any) {
  const [position, setPosition] = useState(props.data);
  const [mypageisOpen, setMypageIsOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [cookies] = useCookies(['accessToken']);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = cookies.accessToken; // 쿠키에서 token 를 꺼내기
    fetch('https://mapping.kro.kr:81/api/board/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.writer == 'anonymousUser') {
          setIsLogin(false);
        } else {
          setIsLogin(data.writer);
        }
      })
      .catch((error) => {
        console.error('유저 정보가 없습니다.', error);
      });
  }, []);

  const clickedMypage = () => {
    setMypageIsOpen((prev) => !prev);
  };
  const clickedSignupLink = () => {
    setIsSignup((prev) => !prev);
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
  ) : mypageisOpen && isLogin ? (
    <Mypage close={clickedMypage} cookie={cookies.accessToken} user={isLogin} />
  ) : !isSignup ? (
    <Signin close={clickedMypage} signup={clickedSignupLink} />
  ) : (
    <Signup close={clickedMypage} signup={clickedSignupLink} />
  );
}

export default MainPage;
