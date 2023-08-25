/* eslint-disable @typescript-eslint/no-explicit-any */
import Memo from './Memos';
import { useEffect, useState } from 'react';
//import axios from 'axios';
import './css/user.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function Mypage(props: any) {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const token = props.cookie; // 쿠키에서 token 를 꺼내기
    fetch('http://mapping.kro.kr:8080/api/memo/search', {
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
      <p className="my-page">{props.user}</p>
      <p className="my-page-id">안녕 {props.user} 입니다</p>
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
