/* eslint-disable @typescript-eslint/no-explicit-any */
import Memo from './Memos';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './css/user.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function Mypage(props: any) {
  const [memos, setMemos] = useState([]);
  const [, , removeCookie] = useCookies(['accessToken']);

  const handleLogout = () => {
    // 로그아웃 버튼을 누르면 실행되는 함수
    removeCookie('accessToken', { path: '/' }); // 쿠키삭제후
    alert('로그아웃 되었습니다.');
    window.location.reload();
  };

  useEffect(() => {
    const token = props.cookie; // 쿠키에서 token 를 꺼내기
    fetch('https://mapping.kro.kr:81/api/memo/search', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMemos(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(memos);

  return (
    <div className="memo-container">
      <hr className="rounded" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <h2>나의 메모</h2>
        <button
          type="button"
          className="memo-close-button"
          onClick={props.close}
        />
      </div>
      <div className="mypage-header">
        <p className="my-page">{props.user} 입니다</p>
        <div className="my-page-logout" onClick={handleLogout}>
          <small>로그아웃</small>
        </div>
      </div>
      <hr className="rounded" style={{ marginTop: 15 }} />

      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        {memos.map((item: any, index: any) => (
          <Memo
            key={index}
            data={{
              id: item.id,
              tag: item.tag,
              content: item.content,
              img: item.img,
              lat: item.lat,
              lng: item.lng,
              writer: item.writer,
              date: item.date,
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Mypage;
